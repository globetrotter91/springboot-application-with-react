import React, { Component }from 'react';
import Modal from 'react-bootstrap/lib/Modal';
import { connect } from 'react-redux';
import { listAllStocks, updateStock, addStock } from './../../actions/stock.actions';

class IdStock extends Component { 
    constructor(props){
        super(props);
        this.state = props.stock;

        this.onChange = this.onChange.bind(this); 
        this.onSubmit = this.onSubmit.bind(this);
    }
    componentDidMount(){
        this.setState({error: false})
    }

    onChange(e){
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault();
        this.setState({error: false})
        if(this.state.id){
            this.props.updateStock(this.state.id, this.state).then(
                res => { this.props.closeModal(); this.props.listAllStocks(this.props.sortedBy, this.props.sortDirection) }, 
                err => { this.setState({error: true}) }
            );
        }
        else{
            this.props.addStock(this.state).then(
                res => { this.props.closeModal(); this.props.listAllStocks(this.props.sortedBy, this.props.sortDirection) }, 
                err => { this.setState({error: true}) }
            ); 
        }
    }

    render(){
        return(
            <Modal show={this.props.showModal} onHide={this.props.closeModal}>
                <Modal.Header>
                    <button style={{color:'#666'}} className="close" data-dismiss="modal" aria-hidden="true" onClick={this.props.closeModal}>&times;</button>
                    <h4>{(this.state.id)?'Update Stock':'Add Stock'}</h4>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={this.onSubmit}>
                        {this.state.error &&
                        <div className="alert alert-dismissible alert-danger">
                            Some Error Occured. Please make sure name is text and price is a number.
                        </div>                        
                        }
                        <div className='form-group'>
                            <label>Name</label>
                            <input required type='text' className='form-control' name="name" value={this.state.name} onChange={this.onChange} />
                        </div>
                        <div className='form-group'>
                            <label>Current Price</label>
                            <input required type='text' className='form-control' name="currentPrice" value={this.state.currentPrice} onChange={this.onChange} />
                        </div>
                        <div className='form-group'>
                            <button className='btn btn-primary' type='submit'>Save</button>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        )
    }
}

export default connect(null, { listAllStocks, addStock, updateStock })(IdStock);