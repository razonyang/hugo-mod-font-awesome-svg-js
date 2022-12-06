module github.com/razonyang/hugo-mod-font-awesome-svg-js/exampleSite

go 1.18

replace github.com/razonyang/hugo-mod-font-awesome-svg-js => ../

replace github.com/razonyang/hugo-mod-font-awesome-svg-js/exampleSite/modules/foo => ./modules/foo

replace github.com/razonyang/hugo-mod-font-awesome-svg-js/exampleSite/modules/bar => ./modules/bar

require (
	github.com/FortAwesome/Font-Awesome v0.0.0-20220831210243-d3a7818c253f // indirect
	github.com/razonyang/hugo-mod-font-awesome-svg-js v0.0.0-00010101000000-000000000000 // indirect
	github.com/razonyang/hugo-mod-font-awesome-svg-js/exampleSite/modules/bar v0.0.0-00010101000000-000000000000 // indirect
	github.com/razonyang/hugo-mod-font-awesome-svg-js/exampleSite/modules/foo v0.0.0-00010101000000-000000000000 // indirect
	github.com/razonyang/hugopress v0.2.0 // indirect
)
