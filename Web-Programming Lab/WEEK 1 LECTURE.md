<!DOCTYPE html>
<html lang="en>
<!-- declaring doctype as html and setting lanugage to english -->
  
<head>
<meta charset="UTF-8">
<!-- Telling the browser to parse the markup into multiple languages -->
<!-- <title>Week 1 Lecture</title> -->
<link rel="stylesheet" href="https://github.com/wendileee/Web-Programming-092023/blob/main/Web-Programming%20Lab/style.css"/>
</head>

<body>
<h1>Week 1 Lecture</h1>
<section>
<h2>Github</h2>
<ol>
  <li>Git has command line interface - must type git command from command line within repository</li>
  <li>Staging- process of telling git which changes to file you want to track</li>
    <ul><li>command= git add --all: to stage all changes</li></ul>
  <li>Commit- process of telling git to save the current status of changes</li>
    <ul><li>git commit -m "your message"</li></ul>
  <li>Push- process of telling git to take all commits and save them to remote git repository</li>
    <ul><li>git push origin master</li></ul>
</ol>
</section>
<section>
  <h2>Internet and Web</h2>
  <ul>
    <li>Internet is an inter network of Wide Area Networks with gateways in between</li>
    <li>Agreed upon common standards such as using TCP/IP protocols </li>
    <li>TCP/IP: Transmission Control Protocol/ Internet Protocol : a suite of communication protocols used to interconnect network devices on the internet.</li>
      <ul><li>TCP (act as package packer in the sorting factory)</li>
        <ul><li>defines how applications can create channels of communication across a network.</li>
          <li>manages how a message is assembled into smaller packets before transmitted over the internet and reassembled in the right order at the destination address.</li></ul>
        <li>IP (delivery address on packages)</li>
          <ul><li>defines how to address and route each packet to make sure it reaches the right destination. </li> </ul>
        <li>Gateway (delivery man for packages)</li>
          <ul><li>Each gateway computer on the network checks this IP address to determine where to forward the message.</li></ul>
        <li>TCP carries reliable services - email (SMTP, IMAP), web (HTTP).</li>
        <li>UDP carries best efforts services - DNS, media streams (RTP).</li>
      </ul>
    <li>Supporting standard application services - DNS, e-mail, web</li>
    <li>Internet regulated by Internet Engineering Task Force (IETF), Internet Corporation for Assigned Names and Numbers (ICANN) Internet Society (ISOC)</li>
  </ul>
</section>

<section>
  <h2>Structure of TCP/IP networks</h2>
  <img src="https://www.notion.so/Lecture-1-80dadefb6e2b45aca4fa3082496700b5?pvs=4#2f58dc8045934aa7b0ce96ad12cf04ab" alt="layer and functionality of tcp/ip networks">
</section>

