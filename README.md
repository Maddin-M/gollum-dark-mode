# Gollum Dark Mode

Since I couldn't find a good dark mode skin for [Gollum][1], the git-based wiki software, I made one myself.

## Install

Copy the `custom.css` and `custom.js` into your wiki repository. Either in the root or to whatever directory you set your `page_file_dir` in Gollum's config. Don't forget to turn on custom CSS and JS loading, as shown in the [docs][2].

## Contributing

Since I created this based on what I see in my personal wiki, parts might be missing. Feel free to create an issue or pull request.

## Credits

Thanks to [Matthias Thym's dark mode repo][3] from which I was able to figue out all the codeblock classes that exist!

## Example

This is a snippet from my wiki, I use a sidebar to display a list of all pages and table of contents (via `[[_TOC_]]`) to display all headers on top of each page:

![Example][4]

[1]: https://github.com/gollum/gollum
[2]: https://github.com/gollum/gollum?tab=readme-ov-file#configuration
[3]: https://codeberg.org/totoroot/gollum-dracula-theme/
[4]: example.png
