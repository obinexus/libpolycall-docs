---
title: LibPolyCall Documentation
description: Protocol-first documentation for the LibPolyCall polyglot system.
---

# LibPolyCall Documentation

LibPolyCall is the OBINexus protocol-first polyglot system for coordinating services, bindings, state, and security boundaries across language runtimes.

This site publishes the documentation for [`obinexus/libpolycall`](https://github.com/obinexus/libpolycall) from the [`obinexus/libpolycall-docs`](https://github.com/obinexus/libpolycall-docs) repository.

## Start Here

- [Welcome](./welcome/)
- [Documentation Overview](./README/)
- [Architecture](./architecture/)
- [Quality Assurance](./QUALITY_ASSURANCE/)
- [Zero Trust Protocol](./ZT_Protocol_v3.3/)
- [Language Binding Guide](./language-binding-blog/)
- [YouTube Learning Playlist]({{ site.youtube.playlist_url }})

## Core Areas

| Area | Purpose |
| --- | --- |
| [Architecture](./architecture/) | System structure, protocol design, SemVerX, migration notes, and implementation philosophy. |
| [API](./api/core/accessibility/) | Core API notes for accessibility, auth, configuration, network, protocol, and telemetry. |
| [Configuration](./config/) | PolyCall XML and service configuration references. |
| [Guides](./guides/getting-started/obinexus-makefile-fixes-guide/) | Practical implementation and setup guides. |
| [Legal](./legal/) | Constitutional, accessibility, governance, and rights documentation. |
| [Versioning](./versioning/naming_standards/) | Naming, tagging, readiness, and release process notes. |

## Generated Index

The generated index below is produced by `tools/generate_docs_index.py`.

{% assign docs_index = site.data.docs_index | default: empty %}
{% if docs_index.size > 0 %}
{% for item in docs_index limit: 80 %}
- [{{ item.title }}]({{ item.url | relative_url }}) `{{ item.format }}`
{% endfor %}
{% else %}
Run `python tools/generate_docs_index.py` to generate `docs/_data/docs_index.yml`.
{% endif %}
