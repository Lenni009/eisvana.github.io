---
aside: false
next: false
---

<script setup lang="ts">
import BlogBuilder from '../components/BlogBuilder.vue';
</script>

# Create Blog Post

## How To Create a New Post

### Category

Blog posts are divided into categories, or folders. You have to assign a category to your post first. The category or post itself should have some kind of reference to your name, so people know who made a blog post.

Blog posts are made from Markdown files. Below is an editor that allows you to write and preview Markdown. The editor will only appear when a category is given.

### Content

Every post should start with a level 1 heading:

```md
# Heading
```

This heading will also be used for the filename.

### Images

Images can be uploaded directly from the editing window. The image button is in the middle of the toolbar. From there, click "Upload Img".

Images larger than 2MB will be compressed automatically, this may take some time.

When they are processed, they will appear in a gallery below the editor.

If the image name is red, that means that the image is not used in your blog post, and therefore also won't be transferred when you submit it.

You can add it to your blog post by clicking the `➕` button below the image. The `✖` button removes the image from the gallery.

Images are represented in Markdown with the following syntax: `![alt text](path/to/image.jpg)`. It is recommended to edit the alt text to a short description of what can be seen in your image.

::: info
Images won't work in the preview window. However, if the image is in the gallery and has a white filename, you can be sure it will display correctly on the page.
:::

### Submitting the New Post

When you are done with the post, click the submit button. Depending on how many images you added and how fast your internet is, this may take a while.

The post is not automatically published though, and needs to be uploaded by the website maintainers first. This is usually done within 24h.

## Editing an Existing Blog Post

Unfortunately, you cannot easily edit an existing post from here. However, all posts are stored on GitHub and can be edited there.

A direct link to the blog file is at the bottom of each blog post.

::: info
Blog posts should be related to Eisvana in some way.

Being a citizen of Eisvana also satisfies this requirement.

This means that if you're a citizen, you may also write about your projects in other parts of the universe.

If you aren't a citizen, the posts should be strictly related to Eisvana and its regions.
:::

## Editor

<BlogBuilder />
