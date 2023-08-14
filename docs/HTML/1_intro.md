---
sidebar_position: 1
description: HTML-чинар туькӀуьрзава.
---

# HTML. Чирхчир хьун.

`HTML` - веб-чинар туькӀуьрун патал кӀвалахдик кутазвай кьилин чӀал я.

## HTML вуч я?

- HTML - HyperText Markup Language (гьипертекст лишанунин чӀал);
- HTML-ди веб-чинин структура туькӀуьрзава.
- HTML элементрикай туькӀуьр жезва.
- HTML-элементри браузердиз веб-чина авай затӀар гьикӀ къалурдатӀа лугьузва.
- HTML-элементри веб-чинин кӀусарик квай манаяр ахъайзава. Месела, «им веб-чинин кӀукӀ я», им шикил я», гьакӀни мад.

## ГьакӀан HTML-документ

```html title="Example of HTML document"
<!DOCTYPE html>
<html>
<head>
<title>Page Title</title>
</head>
<body>

<h1>My First Heading</h1>
<p>My first paragraph.</p>

</body>
</html>
```

- Чна `<!DOCTYPE html>` кхьизватӀа, ам чна HTML5-документ туькӀуьрзава лагьай чӀал я. `HTML5` - HTML-дин 5-лагьай версия я.
- `html` элемент - чи HTML-чинин дувул я. `<html>` - им HTML-чинин и-кьил я. `</html>` - им HTML-чинин а-кьил я.
- `head` элемент - им чна чи мета-гайияр хуьзвай чка я. А гайияр браузерриз, жугъурунин системайриз герек я.` <head>` - им head элементдин и-кьил я. `</head>` - им `head` элементдин а-кьил я.
- `title` элементди чи HTML-чиниз тӀвар гузва. Ам чаз браузерди чинрин тӀварар къалурзавай чкада аквазва. Адет яз, а чка браузердин дакӀардин вине ава.
- `body` элемент чи документдин беден я. Ада вичин къене вилиз аквадай затӀар хуьзва (кьилер, текстар, шикилар, гьакӀни мад).
- `h1` элемент садлагьай (виридлайни чӀехи тир) дережадин кьил я. Ада вири чиниз талукь тир тӀвар гузва. Амай кьилерин (`h2` - `h6`) дережа гъвечӀи жезва.
- `p` элемент текстдин параграф я.

## HTML-элемент вуч я?
HTML-элементдин туькӀуьр хьунухь: ахъаюнин тег; беден (вичин къене авайбур); кӀевунин тег:
```html
<tagname> Content goes here... </tagname>
```

The HTML **element** is everything from the start tag to the end tag:

```html
<h1>My First Heading</h1>
<p>My first paragraph.</p>
```

| Start tag | Element content   | End tag |
|-----------|-------------------|---------|
| `<h1>`    | My First Heading  | `</h1>` |
| `<p>`     | My first paragraph.| `</p>`  |
| `<br>`    | none              | none    |


:::tip Note

Са-са HTML-элементриз беден авач. Ахьтин элементриз ичӀи элемент лугьуда. ИчӀи элементриз кӀевунин тег авач!

:::


## Веб-браузерар
Веб-браузердин (месела, Chrome, Edge, Firefox, Safari) метлеб - HTML-документ кӀелун, ахпа чаз къенидаказ къалурун.
Браузерди HTML-тегар къалурзавач. ЯтӀани, ада абур кӀелдайла, адаз инфо гьикӀ къалурдатӀа чир жезва.

![Chrome web browser](./1_intro/img_chrome.png)

## HTML-чинин структура

<div style={{ backgroundColor: '#E7E9EB', color: 'black', width: '99%', border: '1px solid grey', padding: '3px', margin: '0' }}>
  &lt;html&gt;
  <div style={{ width: '90%', border: '1px solid grey', padding: '3px', margin: '20px' }}>
    &lt;head&gt;
    <div style={{ width: '90%', border: '1px solid grey', padding: '5px', margin: '20px' }}>
      &lt;title&gt;Page title&lt;/title&gt;
    </div>
    &lt;/head&gt;
  </div>
  <div style={{ backgroundColor: '#E7E9EB', color: 'black', width: '90%', border: '1px solid grey', padding: '3px', margin: '20px' }}>
    &lt;body&gt;
    <div style={{ backgroundColor: '#fff', color: 'black', width: '90%', border: '1px solid grey', padding: '3px', margin: '20px' }}>
      <div style={{ width: '90%', border: '1px solid grey', padding: '5px', margin: '20px' }}>
        &lt;h1&gt;This is a heading&lt;/h1&gt;
      </div>
      <div style={{ width: '90%', border: '1px solid grey', padding: '5px', margin: '20px' }}>
        &lt;p&gt;This is a paragraph.&lt;/p&gt;
      </div>
      <div style={{ width: '90%', border: '1px solid grey', padding: '5px', margin: '20px' }}>
        &lt;p&gt;This is another paragraph.&lt;/p&gt;
      </div>
    </div>
    &lt;/body&gt;
  </div>
  &lt;/html&gt;
</div>
<br />

:::tip Note

HTML-чинин структура икӀ чӀугайтӀа жеда. `<body>` элементдин къене авайди чаз браузерда аквазва. `<title>` элементдин къене авайди чаз браузерди чинин тӀвар къалурзавай чкада аквада.

:::


<i style={{float: 'right'}}>Чешме <a href="https://www.w3schools.com/html/html_intro.asp" target="_blank">Introduction to HTML</a></i>