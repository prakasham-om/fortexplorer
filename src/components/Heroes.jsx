import React from 'react';

const Heroes = () => {
    return (
       <>
       <div className="container-fluid mt">
       
        <div className="row">
                <div className="col-lg-10 ">
                    <div className="row">
                        <div className="col-12">
                        <h1 className='fs-1 fw-bold'>Detection <span>Bots</span></h1>
                        </div>
                        <div className="col-lg-10 mt-2">
                            <h5>Forta comprises a decentralized network of independent bots that scan all transactions and block-by-block state changes for threats and anomalies. When an issue is detected, scan bots send alerts to subscribers, which enables them to take action</h5>
                        </div>
                        <div className="col-lg-8 ">
                        <div class="input-group mb-3 mt-3">
                            <input type="text"  placeholder="Search by Bot Name /Bot ID / Developer ID" aria-label="Recipient's username" class="form-control" aria-describedby="button-addon2" />
                            <button className="btn btn-outline-secondary" type="button" id="button-addon2"><i class="bi bi-search"></i></button>
    </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2 cols-md active ">
                <button className="card-body1  text-center rounded">
                        <h5 className='p-1 text'>Build your own bots <i class="bi bi-box-arrow-up-right"></i></h5>
                </button>
                
                </div>
        </div>
    
        <div className="row mt-5">
            <div className="col-12">
                <div className="d-flex gap-2 text-center">
                    <button className='btn-grp'><i class="bi bi-star-fill"></i>&nbsp;Papular Bots</button>
                    <button className='btn-grp'><i class="bi bi-filter-left"></i>&nbsp; Recent Bots</button>
                    <button className='btn-grp'>Discover Protocols &nbsp;<i class="bi bi-box-arrow-up-right"> </i></button>
                </div>
            </div>

        </div>
       </div>
      
       </>
    );
}

export default Heroes;
