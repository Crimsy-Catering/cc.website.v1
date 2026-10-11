# Crimsy Catering website starter

A responsive, multi-page black-and-gold website starter using the supplied Crimsy Catering logo.

## Pages
- `index.html` — Home
- `menu.html` — Menu
- `packages.html` — Packages & Plans
- `quote.html` — Quotation form design
- `gallery.html` — Gallery
- `about.html` — About
- `contact.html` — Contact
- `booking-information.html` — Booking information and policies
- `privacy.html` — Privacy notice starter
- `thank-you.html` — Enquiry confirmation page design

## Run locally
Open `index.html` in a browser, or use VS Code with the Live Server extension.

## Important before launch
- Replace the black picture placeholders with your own photos. The bracketed text says what each image should show.
- Update contact details, service area, package inclusions, guest capacity, allergen information, policies and social links.
- The quotation form is front-end demo only. It does not send or store submissions. Connect it to a form service or a secure backend, configure email notifications, and test it before publishing.
- The thank-you page is a design page; connect it to the form success flow.
- Review the privacy notice and booking terms for your actual business and legal requirements.
- Confirm the Mid+5 package details and the £100 extra-hour rule before launch.
- Do not add supplier costs or internal cost calculations to public pages.

## Publish on GitHub Pages
1. Sign in to GitHub and create a new repository, for example `crimsy-catering`.
2. Choose Public if you want to use GitHub Pages on a free personal repository, and create the repository.
3. On the repository page, choose **Add file → Upload files**.
4. Unzip this project on your computer, then upload the *contents* of the `crimsy-catering-website` folder (including `index.html`, the other `.html` pages and the `assets` folder). Do not upload only the ZIP file.
5. Commit the uploaded files to the `main` branch.
6. Open **Settings → Pages** in the repository.
7. Under Build and deployment, select **Deploy from a branch**, choose `main` and `/ (root)`, then Save.
8. Wait for GitHub Pages to publish the site. The public URL will appear in the Pages section.
9. Open the URL and test every page and link on both phone and desktop.

GitHub Pages hosts static websites. It does not run a server-side form handler, so the quote form needs a third-party form endpoint or separate backend to actually deliver enquiries.
