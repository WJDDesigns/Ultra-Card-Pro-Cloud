# QR Code

> Module type: `qr_code` · Category: Content · **Pro**

Generate QR codes from URL, plain text, template output, or entity state.

## Sources

| Source | Use |
|---|---|
| **URL** | Encode a static URL. |
| **Text** | Encode arbitrary text. |
| **Template** | Encode the result of a Jinja2 template (live updates). |
| **Entity** | Encode the current state of an entity. |

## Customization

- **Size** (px)
- **Foreground / background colors**
- **Error correction level** — L / M / Q / H
- **Logo overlay** (optional)
- **Margin / quiet zone**

## Examples

- **Wi-Fi access** — encode `WIFI:T:WPA;S:GuestNetwork;P:guestpass;;`
- **HA mobile login** — template encoding a long-lived token URL (be careful with secrets!)
- **Dynamic ticket** — template combining entity attributes
- **Door access** — encode a rotating code based on `input_text.access_code`

## Tips

- Template-driven QR codes update live, but scanning while it's animating can be flaky — use static codes for things people will scan.
- For Wi-Fi sharing, use HA's [QR helper integrations](https://www.home-assistant.io/components/) or hard-code via `Text` source.
- Larger codes encode more data but are harder to scan — keep payload tight.

## License

The underlying QR rendering uses `qr-code-styling@1.9.2`. See package licenses for details.
