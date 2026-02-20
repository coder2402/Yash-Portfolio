from playwright.sync_api import sync_playwright

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    page = browser.new_page()
    try:
        page.goto("http://localhost:3000")

        # Wait for the page to load
        page.wait_for_selector("text=Yash Shah", timeout=10000)

        # Scroll to My Work section
        # The section has name='myWork'
        my_work_section = page.locator("div[name='myWork']")
        my_work_section.scroll_into_view_if_needed()

        # Wait for the links to appear
        page.wait_for_selector("text=Demo", timeout=5000)

        # Get all Demo links using role 'link' (this confirms they are <a> tags or have role='link')
        # Also matching the aria-label which starts with "Demo"
        demo_links = page.get_by_role("link", name="Demo")
        count = demo_links.count()
        print(f"Found {count} Demo links")

        if count > 0:
            # Verify the first Demo link
            first_demo = demo_links.first
            tag_name = first_demo.evaluate("element => element.tagName")
            print(f"First Demo link tag name: {tag_name}")

            href = first_demo.get_attribute("href")
            rel = first_demo.get_attribute("rel")
            target = first_demo.get_attribute("target")
            aria_label = first_demo.get_attribute("aria-label")

            print(f"Href: {href}")
            print(f"Rel: {rel}")
            print(f"Target: {target}")
            print(f"Aria-label: {aria_label}")

            # Verify it is NOT inside a button
            closest_button = first_demo.evaluate("element => element.closest('button')")
            print(f"Closest button: {closest_button}")

            if tag_name == "A" and closest_button is None:
                print("SUCCESS: Link is an <a> tag and not inside a <button>")
            else:
                print("FAILURE: Link structure is incorrect")

        # Take screenshot of the My Work section
        my_work_section.screenshot(path="verification_mywork.png")
        print("Screenshot saved to verification_mywork.png")

    except Exception as e:
        print(f"Error: {e}")
        # Take a screenshot anyway if possible
        page.screenshot(path="verification_error.png")
    finally:
        browser.close()

with sync_playwright() as playwright:
    run(playwright)
