#Description

DALL-E is an AI Image Generation tool that accepts a prompt where users can describe an image in their own words and the AI will generate an image related to the prompt provided.
Along with the OpenAI integration, an extra feature of sharing your prompt and image with the community has been added.
In this project, MongoDB is used to store the user, prompt, and a cloudinary URL. Cloudinary is a cloud based platform to store media files and we are using it to store our AI generated images.
Node and Express frameworks are used to provide the backend support that internally uses openAI's APIs to communicate with DALL-E.
Finally, React is used as a Front-end framework to design and develop a responsive user-friendly GUI.