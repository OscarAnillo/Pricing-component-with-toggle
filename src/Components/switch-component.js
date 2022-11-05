import { AntSwitch } from './common/switch';

export default function SwitchComponent({ changeHandler }){
    return (
        <div className="switch">
            <p>Annually</p>
            <AntSwitch onChange={changeHandler}/>
            <p>Monthly</p>
        </div>
    )
}