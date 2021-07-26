import React, {useState} from 'react';
import {Row,Col} from 'react-bootstrap';
export const Counter =()=>{
    const [cntr,setcntr]= useState(0);
    return (
        <div>
                <Row>
                    <Col>
                        <button variant="primary" onclick={() => setcntr(cntr - 1)}>
                          -
                        </button>
                    </Col>
                    <Col>
                        <h1>{cntr   }</h1>
                    </Col>
                    <Col>
                        <button variant="primary" onClick={() => setcntr(cntr + 1)}>
                            +
                        </button>
                    </Col>
                </Row>
            
        </div>
    );
};