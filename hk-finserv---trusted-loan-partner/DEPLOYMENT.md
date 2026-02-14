
# Deployment Guide: HK FinServ Website

Follow these steps to run the website locally and package it for hosting on a Tomcat server.

## 1. Running Locally
Prerequisites: Node.js (v18+) and npm.

1.  **Extract the files** provided into a directory.
2.  **Install dependencies**:
    ```bash
    npm install
    ```
3.  **Run Development Server**:
    ```bash
    npm start
    ```
    The site will be available at `http://localhost:3000`.

---

## 2. Preparing for Tomcat (WAR File)
Tomcat serves Java web archives (`.war`), but this is a static React application. We will bundle the React build into a WAR structure.

### Step A: Generate React Build
```bash
npm run build
```
This generates a `dist/` (or `build/`) folder containing `index.html`, JavaScript, and CSS.

### Step B: Create WAR Structure
1.  Navigate to the `dist/` folder.
2.  Create a folder named `WEB-INF`.
3.  Inside `WEB-INF`, create a file named `web.xml` with the following content (to handle SPA routing):
    ```xml
    <?xml version="1.0" encoding="UTF-8"?>
    <web-app xmlns="http://xmlns.jcp.org/xml/ns/javaee"
             xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
             xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee
             http://xmlns.jcp.org/xml/ns/javaee/web-app_4_0.xsd"
             version="4.0">
        <display-name>HK FinServ</display-name>
        <welcome-file-list>
            <welcome-file>index.html</welcome-file>
        </welcome-file-list>
    </web-app>
    ```

### Step C: Generate the WAR file
You can use a standard ZIP utility or the `jar` command (if you have Java JDK installed):

**Using Command Line (Windows/Mac/Linux with JDK):**
```bash
cd dist
jar -cvf hk-finserv.war *
```

**Using ZIP utility:**
1. Select all files inside the `dist` folder (including the `WEB-INF` folder).
2. Right-click and "Compress to ZIP".
3. Rename the resulting `.zip` file to `hk-finserv.war`.

### Step D: Hosting on Tomcat
1.  Copy `hk-finserv.war` to your Tomcat's `webapps/` directory.
2.  Start (or restart) Tomcat.
3.  The website will be accessible at `http://your-server-ip:8080/hk-finserv/`.

---

## 3. Environment Variables
Ensure the `API_KEY` for Gemini is available in your production environment if you wish to use the AI Assistant. If hosting purely static on Tomcat, you might need to hardcode the key (not recommended) or provide it via a proxy server.
