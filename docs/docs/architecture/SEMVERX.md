# Semantic Version X (SemVerX)

**Author:** OBINexus  
**Status:** Active Development  
**License:** Open Source

---

## 📖 Overview

**SemVerX (Semantic Version Extended)** is a next-generation versioning and dependency management system.  
It builds on [Semantic Versioning (SemVer)](https://semver.org/) but **extends the schema** to support **hot-swappable components, real-time dependency resolution, and fault-tolerant upgrades**.

Instead of only `MAJOR.MINOR.PATCH`, SemVerX introduces **state-based versioning**:

* **Stable** → Production-ready and long-term support
* **Legacy** → Deprecated or backward-compatible components
* **Experimental** → Cutting-edge, test-only components

This schema makes it possible to **automatically swap, validate, and recover dependencies** across languages, frameworks, and environments — from development to production.

---

## 🚀 Why SemVerX?

Traditional SemVer solves *what changes break compatibility*.  
SemVerX solves *how to manage change in real time*.

* **Hot Swapping:** Replace components (like airplane wings or car wheels) without rebuilding the whole system.
* **Directed Acyclic Graph (DAG) Resolution:** Ensure dependencies resolve consistently across chains and prevent "diamond dependency" problems.
* **Eulerian & Hamiltonian Cycles:** Advanced graph theory algorithms to decide whether to update edges (connections) or nodes (components) when resolving versions.
* **Fault-Tolerance:** Systems can degrade gracefully and self-heal by rolling forward or back to compatible versions.
* **Polyglot-Ready:** Works across Python, Rust, Node.js, Lua, and more with **FFI bindings** for cross-language support.

---

## 🔧 How It Works

### Version Schema

```
MAJOR(Stable|Legacy|Experimental).MINOR(Stable|Legacy|Experimental).PATCH(Stable|Legacy|Experimental)
```

Example:

```
v1.stable.3.experimental.14.legacy
```

Each component tracks **its lifecycle state**, not just its numeric version.

### Dependency Resolution

* **Eulerian Cycle:** Check edges (dependencies) to ensure everything connects without downtime.
* **Hamiltonian Cycle:** Visit all nodes (components) to validate compatibility and cache fallback options.
* **A* Scoring:** Chooses the *fastest safe path* to resolve upgrades.

### Anti-Patterns Addressed

* **Diamond Dependency Problem** → Prevents multiple paths importing conflicting versions.
* **System Decoherence** → Stops one faulty library from cascading errors across the entire project.

---

## 📦 Installation

### Node.js

```bash
npm install -g @obinexus/semverx
```

### Python

```bash
pip install obinexus-semverx
```

### Rust

```bash
cargo add semverx
```

---

## 💡 Usage Example

```python
from semverx import Resolver, Policy

resolver = Resolver(policy=Policy(
    allow_legacy_use=False,
    allow_experimental_swap=True,
    allow_stable_swap=True
))

# Parse version states
comp1 = resolver.parse("1.2.3-stable")
comp2 = resolver.parse("1.2.4-experimental")

# Validate compatibility
if resolver.compatible(comp1, comp2):
    print("Safe hot-swap possible ✅")
```

---

## 🌉 Integration Models

* **Monogot** → Single-language use (Python-only, Rust-only, etc.)
* **Hybrid** → Multi-language interaction (common in real projects)
* **Polyglot** → Full cross-language FFI integration

---

## 📊 Roadmap

1. **v1.0 — Core Schema & Parser**
   * Legacy, Stable, Experimental state machine
   * DAG resolution engine

2. **v2.0 — Polyglot Expansion**
   * Full Rust ↔ Python ↔ Node.js interoperability
   * FFI adapters for C/C++

3. **v3.0 — Autonomous Resolution**
   * Real-time update agents
   * Community registry (`obinexus-registry`)

---

## 🛡️ Security & QA

* **Test-Driven Development (TDD)**
* **No downtime updates**
* **Malware-safe dependency resolution**
* **Fallback caches for rollback**

---

## 📚 Resources

* [SemVer.org](https://semver.org/) (original spec)
* [OBINexus GitHub](https://github.com/obinexus)
* Research: Eulerian & Hamiltonian cycles in dependency graphs

---

## ✨ Example Analogy

Think of SemVerX like maintaining a **plane**:

* You can **swap the wings** without rebuilding the whole plane.
* You can **replace the seats** to support more passengers.
* The plane keeps flying, with **no downtime**.

That’s the power of SemVerX.

---

## 🤝 Contributing

1. Fork this repo
2. Create a feature branch
3. Submit a pull request

We welcome contributions in:

* Code
* Graph theory optimization
* Polyglot registry integration
* Documentation & tutorials

---

## 📜 License

Open Source – MIT License

