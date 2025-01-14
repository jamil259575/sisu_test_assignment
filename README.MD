# Playwright Automation Suite for Epicbet.com

This repository contains automated end-to-end tests for the **_epicbet.com_** application using Playwright. The tests cover critical functionalities to ensure the application's reliability and performance.

---

##  Features at a Glance

- **Intelligent Test Automation**:
    - Coverage for betting functionalities.
    - Modular and scalable architecture for ease of maintenance.
- **Cross-Browser Testing**:
    - Ensures compatibility across Chromium, Firefox, and Mobile View.
- **Reporting**:
    - Fully interactive **HTML Test Reports** for actionable insights.
- **CI/CD Integration**:
    - Integrated with GitHub Actions for continuous deployment.

---

##  Getting Started

### **Prerequisites**
Before diving into the tests, ensure the following tools are installed:
- **Node.js** (v16 or later)
- **npm** (packaged with Node.js)

### **Installation**
1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   
2. Navigate to the project directory:
   ```bash
    cd your-repo-name  

3. Install dependencies:
   ```bash
    npm install
   
4. Install Playwright browsers and dependencies:
   ```bash
    npx playwright install --with-deps

##  Reporting tool
The test framework includes advanced HTML reporting powered by Playwright's built-in reporter.

* Interactive dashboards for test outcomes.
* Comprehensive insights with step-by-step traceability.
* Embedded error logs for faster debugging.

To view the report after a test run:
```bash
    npx playwright show-report
```

## Project structure
```perl
├── tests/
│   ├── config/
│   │   ├── paths/
│   ├── constants/
│   │   ├── helper/
│   │   ├── test-keys/
│   ├── page-objects/
│   │   ├── EN/
│   │   │   ├── auth/
│   │   │   ├── bet-slip/
│   │   │   ├── game-lobby/
│   │   │   │   ├── football/
│   │   │   ├── homepage/
│   ├── specs/
│       ├── EN/
│       │   └── e2e/
│       │       ├── homepage/
│       │       │   ├── auth/
│       │       │   ├── language/
│       │       │   ├── place-bet/
│       │       │   ├── visibility/
│       │       ├── sports-lobby/
│       │           ├── football/
```
When it comes to use Playwright, [Fixtures](https://playwright.dev/docs/test-fixtures) are must and essential. Fixtures has been used in this project for isolation between tests.
Also [page object model](https://playwright.dev/docs/pom) (POM) has been applied for pages in order to have easy maintenance and code readability purposes. According to best practises,elements have been located via _getBytestId()_ method by using _data-testid_ IDs. In very few places it has not been used due to the missing IDs.




##  CI/CD integration
This project is built with GitHub Actions. Key highlights include:

* Parallel Execution: Optimize test runtimes with concurrent workers.
* Multi-Browser Testing: Simultaneously validate across major browsers.
* Trace Integration: Leverage Playwright's trace viewer for in-depth analysis of CI failures.

### CI Workflow
The playwright.yml GitHub Actions workflow is preconfigured:
```yaml
  name: Run Playwright tests
  run: LANG=en npx playwright test --workers=4
```
Since the application has language options, by providing language variable (i.e LANG=fi ,LANG=est) and declaring urls per regions in fixtures automated tests can run against different languages. Project folder structure has been constructed in this way. Also, while integrating the tests to GitHub actions, Playwright was not able to access to page from actions server and that's why I declared _self-hosted_ type of run. You can see run history from actions and artifacts can be downloaded.
Besides that, I had issues with webkit browser and I did not add it in the config file,however, I mentioned Mozilla and Chrome Browsers instead with mobile view.

##  Running tests

Run all tests:
   ```bash
     npx playwright test
```
Run a Specific Test:
   ```bash
     npx playwright test tests/specs/EN/e2e/homepage/place-bet/place-bet.spec.ts;
```
Debug mode:
   ```bash
     npx playwright test --debug;
```
