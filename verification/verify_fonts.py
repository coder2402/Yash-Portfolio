from playwright.sync_api import sync_playwright
import time

def verify_fonts():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()

        try:
            print("Navigating to http://localhost:3000")
            # Increased timeout and added retry logic could be useful, but let's try standard first
            page.goto("http://localhost:3000", timeout=60000)

            # Wait for content to load
            page.wait_for_selector("text=Yash Shah", timeout=30000)

            # Verify the link tags are present
            # We can execute JS to check document.head
            font_links_count = page.evaluate("""
                () => {
                    const links = document.querySelectorAll('link[href*="fonts.googleapis.com"]');
                    return links.length;
                }
            """)

            print(f"Found {font_links_count} font links.")

            if font_links_count > 0:
                print("SUCCESS: Google Fonts links found.")
            else:
                print("FAILURE: Google Fonts links NOT found.")

            # Take a screenshot
            page.screenshot(path="verification_fonts.png")
            print("Screenshot saved to verification_fonts.png")

        except Exception as e:
            print(f"Error: {e}")
        finally:
            browser.close()

if __name__ == "__main__":
    verify_fonts()
