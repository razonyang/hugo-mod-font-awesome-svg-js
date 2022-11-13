modulesIcons = [];
{{- range $kind, $icons := . }}
    {{- range $name, $v := $icons }}
        {{- $iconName := printf "fa%s" (partial "font-awesome/format-icon-name" $name) }}
        {{- $iconPath := printf "js/font-awesome/free-%s-svg-icons/%s" $kind $iconName }}
{{- printf "import { %s } from '%s';\n" $iconName $iconPath }}
{{- printf "modulesIcons.push(%s);\n" $iconName }}
    {{- end }}
{{- end }}
