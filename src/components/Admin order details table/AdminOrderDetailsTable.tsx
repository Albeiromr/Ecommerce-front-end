import React from 'react';
import "./0px-599px.scss";
import "./600px-1024px.scss";
import "./1025px-1920px.scss";

const AdminOrderDetailsTable = () => {

    //temporal constant for styling some text, it must be replace by context
    const orderSelected:{status: string} = {status: "new order"}
    //----------------------------------------------------------------------

    return(
        <div className="admin-order-details-table">

            <div className="admin-order-details-table__title-bar">

                <p className="admin-order-details-table__titleOne">Order ID</p>
                <p className="admin-order-details-table__titleTwo">Date</p>
                <p className="admin-order-details-table__titleThree">Customer Name</p>
                <p className="admin-order-details-table__titleFour">Amount</p>
                <p className="admin-order-details-table__titleFive">Status Order</p>  

            </div>

            <div className="admin-order-details-table__table-container">

                <div className="admin-order-details-table__first-bar">
                    
                    <p className="admin-order-details-table__first-bar-text-one" >#5552375</p>
                    <p className="admin-order-details-table__first-bar-text-two" >26 March 2020, 02:12 AM</p>
                    <p className="admin-order-details-table__first-bar-text-three" >Emilia Johanson</p>
                    <p className="admin-order-details-table__first-bar-text-four" >$251.16</p>

                    {orderSelected.status === "on delivery" ?
                    <p className="admin-order-details-table__first-bar-text-on-delivery">On Delivery</p>
                    : null}

                    {orderSelected.status === "new order" ?
                    <p className="admin-order-details-table__first-bar-text-new-order">New Order</p>
                    : null}

                </div>

                <div></div>

            </div>

        </div>
    )
};

export default AdminOrderDetailsTable;