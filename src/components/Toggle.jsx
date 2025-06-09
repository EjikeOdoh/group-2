import Switch from '@mui/material/Switch';

export default function Toggle(props) {
    return (
        <Switch
            checked={props.checked}
            onChange={props.handleChange}
        />
    );
}
