import React, {Component} from 'react';

class PhoneInfo extends Component{
    static defaultProps = {
        info : {
            name : 'name',
            phone : '010-0000-0000',
            id : 0
        }
    }

    handleRemove = () => {
        // 삭제 버튼 클릭시 onRemove에 id 넣어서 호출
        const {info, onRemove} = this.props;
        onRemove(info.id);
    }

    render(){
        const style = {
            border : '1px solid black',
            padding : '8px',
            margin : '8px'
        }
        const {name, phone, id} = this.props.info;

        return (
            <div style={style}>
                <div><b>{name}</b></div>
                <div>{phone}</div>
                <button onClick={this.handleRemove}>Delete</button>
            </div>
        );
    }
}

export default PhoneInfo;