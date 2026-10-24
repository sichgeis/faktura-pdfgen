Invoice PDF Generator
#####################

This is a retired invoice-generation demo retained for historical reference.
It is no longer deployed. The original application structure and dependency
versions are preserved.

Installation
************

1. Install Django
2. Install django-tex
3. Install any needed latex .cls or .sty files to the target enviroment and run 'texhash' to compile the "ls-R" database file.

Private local configuration
***************************

Supply your own Django signing key before running management commands::

    export DJANGO_SECRET_KEY="$(python3 -c 'import secrets; print(secrets.token_urlsafe(48))')"
    python3 service/manage.py migrate

The SQLite file is local runtime data, recreated by migrations rather than
stored in Git. Keep a stable private signing key when persistent sessions or
signed data matter. Local environment files and databases are ignored; Django
does not automatically load a .env file, so export its values into your shell.

DJANGO_ALLOWED_HOSTS optionally supplies a comma-separated hostname list. Its
default permits only localhost, 127.0.0.1 and [::1]. Historical deployment
settings use DJANGO_STATIC_ROOT if a custom static-file output path is needed.
Historical custom TeX executables can be selected through LATEX_INTERPRETER;
otherwise those settings use their original pdflatex or lualatex executable
name from PATH rather than a personal home-directory installation path.
No personal hostnames or home-directory deployment paths are configured.

Invoice samples use fictional names and deliberately invalid demo banking,
tax and contact identifiers. Replace them with your own data locally. The
frontend/backend form field names, invoice template and PDF route are retained.

History cleanup
***************

In October 2026, the published signing key, personal deployment details and
author mailbox were removed from fetched Git history. Author email now uses
the owner's GitHub noreply identity; upstream license and bot attribution are
preserved. The retired dependency-update branches retain their dependency
changes.

Use a fresh clone after this rewrite. Merging or pushing an old clone can
restore the removed history. Existing public forks, GitHub-managed PR refs and
cached old commits require separate handling by their owners or GitHub.
