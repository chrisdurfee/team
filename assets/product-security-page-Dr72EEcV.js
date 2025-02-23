import{u as t,d as s,Z as r,e}from"./index-DPpCpRwj.js";import{D as i}from"./doc-page-D9-RulUV.js";import"./sidebar-menu-page-lAu74WTl-BznzVrpR.js";const c=()=>i({title:"Product Security",description:"We are committed to ensuring the highest level of security for Essentials and other internal and external services. We implement a range of best practices to secure our servers, application, and client data. This document outlines some of the key methods we employ to maintain a secure environment."},[t({class:"space-y-4 mt-12"},[s({class:"text-2xl font-bold"},"Hosting"),r({class:"list-disc pl-6 space-y-1 text-muted-foreground"},[e("We utilize secure, cloud-hosted servers that adhere to industry best practices for premises security and server access."),e("Access to specific resources is restricted through white-listing."),e("Regular security scans ensure that our systems remain secure."),e("Our platform uses an HTTPS connection with a TLS 1.3 certificate, the latest available version, to encrypt all data sent to and from the application."),e("We enforce secure connections at the server level.")])]),t({class:"space-y-4 mt-12"},[s({class:"text-2xl font-bold"},"Servers"),r({class:"list-disc pl-6 space-y-1 text-muted-foreground"},[e("Our application is prevented from being nested in iframes."),e("We implement XSS-Protection headers to counteract cross-site scripting."),e("Strict-Transport-Security headers are in place to mitigate man-in-the-middle attacks."),e("Server details are restricted from being shared in server request responses."),e("Our technology stack is regularly updated to incorporate the latest patches and supported library versions."),e("Security protocols are in place to restrict access to sensitive files on our servers.")])]),t({class:"space-y-4 mt-12"},[s({class:"text-2xl font-bold"},"Platform"),r({class:"list-disc pl-6 space-y-1 text-muted-foreground"},[e("User authentication is mandatory, with all users required to log in using a username and password that meet HIPAA recommendations."),e("Cookies set by the application can only be used over an HTTP secure connection, adhering to the strict same-site policy."),e("We employ rate limiting and brute force prevention measures to combat malicious activities during login attempts."),e("CSRF prevention mechanisms are used to block unauthorized actions."),e("Our platform API utilizes a secure gating and policy system for per-action authentication, which occurs on all requests to the app."),e("Malicious file uploads are automatically blocked by our server-side framework."),e("Statement param-binding is used to prepare all data inserted or updated in databases, preventing SQL injection."),e("Sensitive data is encrypted using industry best practices and can only be decrypted by our application using an authorized account with access rights.")])]),t({class:"space-y-4 mt-12"},[s({class:"text-2xl font-bold"},"Development"),r({class:"list-disc pl-6 space-y-1 text-muted-foreground"},[e("System Engineers and our Security Manager provide training for our teams, ensuring secure and resilient system development."),e("Regular updates on new security topics are provided to the teams, along with encouragement to continue learning."),e("We leverage tools, libraries, and best practices to create secure applications."),e("We conduct monthly organizational training on new security issues and perform security testing, including phishing exercises, to verify the effectiveness of our training.")])])]);export{c as ProductSecurityPage,c as default};
