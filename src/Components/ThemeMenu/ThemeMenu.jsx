import React from 'react';
import { useState } from 'react';
import { SketchPicker } from 'react-color';
import ReactSwitch from 'react-switch';

function ThemeMenu({onColorPicker}) {
  const [checked, setChecked] = useState(false);
  return (
    <div>
      <div>테마</div>
      <div className='smallTitle'>다크 / 라이트</div>
      <ReactSwitch  />
      <div className="smallTitle">강조색</div>
      <button type='button' className='colorPickerBtn' onClick={()=>{setChecked(!checked)}}>컬러 pick!</button>
    {checked && (
      <SketchPicker onChange={()=>{}} onChangeComplete={(c)=>{}}/>
    )}
    </div>
  );
}

export default ThemeMenu;