# ReactPHP application
Using ReactJS as the frontend and PHP for backend operations.

## Installation and usage

This project is written in PHP 7.1 so you gotta get that on your machine. Additionally php `composer` is being used for php dependency management, so you should download that (install it locally in the project) by :

```bash
curl -s https://getcomposer.org/installer | php
```

Then you can install all required runtime dependencies

```bash
php composer.phar install
```

We're using Webpack for asset management. Move into the public/assets folder and run following commands:
```bash
npm install

npm run start
```

Remember to build the files when you're done working!
```bash
npm run build
```

Since we're creating a Docker container, you gotta get Docker on your machine:<br>
MacOS: https://hub.docker.com/editions/community/docker-ce-desktop-mac/ <br>
Windows: https://hub.docker.com/editions/community/docker-ce-desktop-windows/

<b>Fire it up</b> with the following make command in root:
```bash
make start
```
Finally, go to http://localhost:9090 and see the application alive.<br><br>

You can stop the Docker container again with:
```bash
make stop
```
