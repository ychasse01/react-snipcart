import React from 'react'

export default class addToCart extends React.Component{
	constructor(props){
		super(props)
		this.addToCart = this.addToCart.bind(this)
	}
	addToCart(e){
		if(window.Snipcart){
			window.Snipcart.api.items.add(this.props.data)
		}
	}
	render(){
		let dataAttrs = {}
		for(let i in this.props.data){
			dataAttrs[`data-${i}`] = this.props.data[i]
		}
		return(
			<div onClick={this.addToCart}>
				{this.props.children}
				<div {...dataAttrs} style={{display: 'none'}} />
			</div>
		)
	}
}
