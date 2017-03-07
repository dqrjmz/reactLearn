import React from 'react';

const App=()=>{
	return <div>
		<Button  type='butt56565on'>
				&nbsp;jmz
		</Button>
	</div>
}

const Button=(props)=><button type="button">{props.children}{props.type}</button>

// 定义组件的属性规则
Button.propTypes={
	type(props,propName,component){
		if(!(propName in props)){
			throw new Error('not '+propName);
		}
		if(props[propName].length<10){
			throw new Error('too short');
		}
	}
}

export default App;


