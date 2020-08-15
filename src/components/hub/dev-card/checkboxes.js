/** @jsx jsx */
import { jsx } from 'theme-ui';
import Checkbox from '../../home/social-checkboxes/checkbox';
import Label from '../../home/signup/label';
import LabelText from '../../common/label-text';
import React from 'react';
import { DevCardStateContext, DevCardDispatchContext } from './../../../context/devcard-context';

const Checkboxes = () => {
  const state = React.useContext(DevCardStateContext);
  const dispatch = React.useContext(DevCardDispatchContext);
  return (
    <aside
      sx={{
        gridArea: 'checkboxes',
        height: 'auto',
        display: 'flex',
        flexDirection: ['column'],
        justifyContent: 'space-evenly',
        alignItems: 'center',
        placeSelf: 'center',
        p: 4,
        border: 'solid 2px',
        width: 'max-content',
        backgroundColor: 'secondary',
        my: 5,
      }}
      className="platforms"
    >
      <Label>
        <LabelText>Select Items to update</LabelText>
      </Label>

      <div
        sx={{
          display: 'flex',
          // flexDirection: 'column',
          justifyContent: 'space-evenly',
          my: 3,
          width: '100%',
        }}
      >
        <Checkbox
          type="Profile image"
          checked={state.pushProfileImage}
          disabled={state.checkboxGitHub}
          onCheckboxChange={() => dispatch({ type: 'pushProfileImage', payload: !state.pushProfileImage })}
        />
        <Checkbox
          type="Cover image"
          checked={state.pushCoverImage}
          disabled={state.checkboxGitHub}
          onCheckboxChange={() => dispatch({ type: 'pushCoverImage', payload: !state.pushCoverImage })}
        />
        <Checkbox
          type="Profile content"
          checked={state.pushContent}
          onCheckboxChange={() => dispatch({ type: 'pushContent', payload: !state.pushContent })}
        />
      </div>
      <Label>
        <LabelText>Select Platform(s) to update</LabelText>
      </Label>

      <div
        sx={{
          display: 'flex',
          // flexDirection: 'column',
          justifyContent: 'space-evenly',
          my: 3,
          width: '100%',
        }}
      >
        <Checkbox
          type="GitHub"
          checked={state.checkboxGitHub}
          onCheckboxChange={() => dispatch({ type: 'checkboxGitHub', payload: !state.checkboxGitHub })}
        />
        <Checkbox
          type="Twitter"
          checked={state.checkboxTwitter}
          onCheckboxChange={() => dispatch({ type: 'checkboxTwitter', payload: !state.checkboxTwitter })}
        />

        <Checkbox
          comingSoon
          type="DEV"
          onCheckboxChange={() => dispatch({ type: 'checkboxTwitter', payload: !state.checkboxTwitter })}
          disabled
        />
        <Checkbox
          comingSoon
          type="CodePen"
          onCheckboxChange={() => dispatch({ type: 'checkboxTwitter', payload: !state.checkboxTwitter })}
          disabled
        />
        <Checkbox
          comingSoon
          type="LinkedIn"
          onCheckboxChange={() => dispatch({ type: 'checkboxTwitter', payload: !state.checkboxTwitter })}
          disabled
        />
      </div>
    </aside>
  );
};

export default Checkboxes;
