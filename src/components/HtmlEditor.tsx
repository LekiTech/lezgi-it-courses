import React from 'react';
import AceEditor from 'react-ace';
import "ace-builds/webpack-resolver"
import 'ace-builds/src-noconflict/mode-html';
import 'ace-builds/src-noconflict/theme-github';
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/ext-language_tools';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

type HtmlEditorProps = {
  defaultValue: string;
};

function HtmlEditor({ defaultValue }: HtmlEditorProps) {
  const [code, setCode] = React.useState<string>(defaultValue);
  return (
    <div style={{width: '100%', minHeight: '500px', display: 'flex', flexDirection: 'column'}}>
      <Typography variant="h6" gutterBottom>
        Редактор
      </Typography>
      <AceEditor
        mode="html"
        theme="monokai"
        onChange={(newValue: string, event?: any) => setCode(newValue)}
        name="codeEditor___html"
        editorProps={{ $blockScrolling: true }}
        width="100%"
        height="100%"
        style={{ minHeight: '300px' }}
        defaultValue={defaultValue}
        value={code}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
          showGutter: true,
          highlightActiveLine: true,
          showLineNumbers: true,
        }}
      />
      <Typography variant="h6" sx={{mt: '20px'}} gutterBottom>
        Нетижа
      </Typography>
      <Paper elevation={3} sx={{mb: '20px'}}>
        <iframe
          style={{ width: "100%", height: "fit-content" }}
          src={"data:text/html;charset=UTF-8," + encodeURIComponent(code)}
          title="sandbox"
        />
      </Paper>
    </div>
  );
};

export default HtmlEditor;