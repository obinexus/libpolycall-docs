# LibPolyCall Documentation

This repository publishes the documentation website for [LibPolyCall](https://github.com/obinexus/libpolycall), the OBINexus polyglot system for protocol-first, cross-language service coordination.

The public documentation target is:

- <https://docs.libpolycall.org>

The source repository is:

- <https://github.com/obinexus/libpolycall-docs>

## Documentation Site

The site is built with Jekyll from the `docs/` directory. It is configured for GitHub Pages with a custom domain and includes GitLab Pages CI support for mirrored publishing.

### Local Preview

Install Ruby dependencies:

```bash
bundle install
```

Run the Jekyll site locally:

```bash
bundle exec jekyll serve --source docs --destination _site --livereload
```

Then open:

```text
http://127.0.0.1:4000
```

### Regenerate the Documentation Index

The repository includes a small Python helper that scans Markdown and PDF documents and writes a Jekyll data file:

```bash
python -m pip install -e .
python -m tools.generate_docs_index
```

The generated file is `docs/_data/docs_index.yml`.

## Publishing

GitHub Pages is configured through `.github/workflows/pages.yml`.

Expected repository settings:

- Pages source: GitHub Actions
- Custom domain: `docs.libpolycall.org`
- DNS: `docs.libpolycall.org` should point to the GitHub Pages endpoint for `obinexus/libpolycall-docs`

If a workflow run reports `Get Pages site failed` or `HttpError: Not Found`, enable Pages once in the repository settings:

1. Open `Settings -> Pages`.
2. Set `Build and deployment -> Source` to `GitHub Actions`.
3. Save `docs.libpolycall.org` as the custom domain.

The same one-time setup can be done with a GitHub token that has repository Administration write and Pages write permissions:

```bash
gh api \
  --method POST \
  repos/obinexus/libpolycall-docs/pages \
  -f build_type=workflow

gh api \
  --method PUT \
  repos/obinexus/libpolycall-docs/pages \
  -f build_type=workflow \
  -f cname=docs.libpolycall.org \
  -F https_enforced=true
```

After GitHub Pages exists for the repository, the normal workflow deployment can use `GITHUB_TOKEN`.

For GitLab mirrors, `.gitlab-ci.yml` builds the same Jekyll site into `public/`.

## License

This documentation repository is released under the MIT License. See [LICENSE](./LICENSE).
