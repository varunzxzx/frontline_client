# Frontline app client

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->

[![All Contributors](https://img.shields.io/badge/all_contributors-6-orange.svg?style=flat-square)](#contributors-)

<!-- ALL-CONTRIBUTORS-BADGE:END -->

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/15a9d95d956743fdbf55e81fbfbe1b21)](https://app.codacy.com/manual/Kailash-Sankar/frontline_client?utm_source=github.com&utm_medium=referral&utm_content=Kailash-Sankar/frontline_client&utm_campaign=Badge_Grade_Settings) [![Known Vulnerabilities](https://snyk.io/test/github/Kailash-Sankar/frontline_client/badge.svg?targetFile=package.json)](https://snyk.io/test/github/Kailash-Sankar/frontline_client?targetFile=package.json) ![Docker Image Size (latest by date)](https://img.shields.io/docker/image-size/kailashsankar/frontline_client)

Manage volunteers, requests, supporters and kind donations.
Currently hosted at [karnatakafightscorona.org](https://karnatakafightscorona.org/#/)

If you want to use the app for a differnt cause or authority, update the home page and associated components.

## To setup locally

    git clone <repo>
    npm install
    npm start

## docker build

    docker build -t frontline_client:latest .
    docker run -d --restart=always --name=frontline_client -p 0.0.0.0:3000:80 frontline_client:latest

  Note: you can automate the manaul steps for dev environments with alfred
	it's a hacked up cli util to avoid typing large docker commands one by one,
	help guide is in the repo: <https://github.com/Kailash-Sankar/alfred>

## Server

   The instructions for setting up the server are here, [frontline_server](https://github.com/Kailash-Sankar/frontline_server)

## Contributors ✨

[Contribution Guidelines](CONTRIBUTING.md)


<!-- markdownlint-enable -->

<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

## Credits

The home page widget data is from [api.covid19india.org](https://api.covid19india.org/)
