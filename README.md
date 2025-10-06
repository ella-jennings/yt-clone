# yt-clone

## Set up (mac)
### Install homebrew
Check out https://brew.sh/ for updated instructions

`/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`

### Node
First Install node version manager: 

`brew install nvm`

Now you can install [node](https://nodejs.org/en/download): 

`brew install node`

`nvm install 22`

Verify the Node.js version:

`node -v` # Should print "v22.20.0".

Verify npm version:

`npm -v` # Should print "10.9.3".

### Managed dependencies

Run `npm ci` from the home directory will install required dependencies.

### ffmpeg
(for running the application locally only, not using dockerfile)

`brew install ffmpeg`

### Docker image
```
brew install docker
docker build -t video-processing-service . --platform linux/amd64
docker run -p 3000:3000 -d video-processing-service
```
To see the images: 

`docker images`

## Running the application
* `npm start` will start the application on `http://localhost:3000`
