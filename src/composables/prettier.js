// https://stackoverflow.com/questions/4810841/pretty-print-json-using-javascript
export function useJsonPrettier(json) {
  json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  return json.replace(
    /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,
    function (match) {
      var cls = 'text-orange-400'
      if (/^"/.test(match)) {
        if (/:$/.test(match)) {
          // key
          cls = 'text-green-400'
          match = `${match.replace(':', '')}<span class="text-white"> :</span>`
        } else {
          // string
          let dls = `class='underline text-green-400 decoration-dotted'
class='underline text-green-400 decoration-dotted'`

          if (match.includes('@gmail.com')) {
            match = `<a ${dls} href='mailto:${match.replaceAll('"', '')}'>${match}</a>`
          } else if (match.includes('http')) {
            match = `<a ${dls} target='_blank' href='${match.replaceAll('"', '')}'>${match}</a>`
          } else if (match.includes('resume')) {
            match = `<a ${dls} target='_blank' href='${
              '/' + match.replaceAll('"', '')
            }'>${match}</a>`
          }
          cls = 'text-green-400'
        }
      } else if (/true|false/.test(match)) {
        // boolean
        cls = 'text-red-400'
      } else if (/null/.test(match)) {
        cls = 'text-red-400'
      }
      return '<span class="' + cls + '">' + match + '</span>'
    }
  )
}
