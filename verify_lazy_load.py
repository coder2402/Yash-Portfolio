from playwright.sync_api import sync_playwright

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        try:
            # Navigate to the app
            page.goto("http://localhost:3000")

            # Wait for the app to load (Home section is visible)
            page.wait_for_selector("#home")

            # Scroll to the bottom to trigger Contact load
            page.evaluate("window.scrollTo(0, document.body.scrollHeight)")

            # Wait for Contact section to be visible
            # Since it's lazy loaded, it might take a moment
            # We look for the "Contact" heading
            contact_header = page.get_by_text("Contact", exact=True)
            contact_header.wait_for(state="visible", timeout=10000)

            # Take a screenshot of the contact section
            # We can select the contact section by id
            contact_section = page.locator("#contact")
            contact_section.screenshot(path="verification_contact.png")

            print("Verification successful: Contact section loaded.")

        except Exception as e:
            print(f"Verification failed: {e}")
            # Take a full page screenshot for debugging
            page.screenshot(path="verification_error.png")
        finally:
            browser.close()

if __name__ == "__main__":
    run()
