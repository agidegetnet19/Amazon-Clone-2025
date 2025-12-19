import React, { useContext } from 'react';
import classes from './Header.module.css';
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import LowerHeader from './LowerHeader';
import { Link } from 'react-router-dom';
import { DataContext } from '../DataProvider/DataProvider';
import { auth } from '../../Utility/firebase';

function Header() {
    const [{ user, basket }, dispatch] = useContext(DataContext);
    const totalItem = basket?.reduce((amount, item) => { return amount + item.amount; }, 0);

    return (
        <section className={classes.fixed}>
            <section>
                <div className={classes.header_container}>
                    <div className={classes.logo_container}>
                        <Link to="/">  <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon logo" />
                        </Link>

                        <div className={classes.delivery}>
                            <span>   <SlLocationPin /></span>
                            <div>
                                <p>Delivered to</p>
                                <span>Ethiopia</span>
                            </div>
                        </div>
                    </div>
                    <div className={classes.search}>
                        <select name="" id="">
                            <option value="">All</option>
                        </select>
                        <input type="text" name="" id="" placeholder='search product' />
                        <BsSearch size={38} />
                    </div>
                    {/* right side link  */}
                    <div className={classes.order_container}>
                        <Link to="" className={classes.language}>
                            <img src="https://i.pinimg.com/736x/ff/76/57/ff7657010677b3dbe75fe03c5de5a8d7.jpg" alt="" />
                            <select name="" id="">
                                <option value="">EN</option>
                            </select>
                        </Link>
                        <Link to={!user && "/auth"}>
                            <div>
                                {
                                    user ? (
                                        <><p>Hello {user?.email?.split("@")[0]}</p>
                                            <span onClick={() => auth.signOut()}>sign Out</span>
                                        </>
                                    ) : (
                                        <> <p>Hello,Sign In</p>
                                            <span>Account & Lists</span>
                                        </>
                                    )
                                }
                            </div>
                        </Link>
                        <Link to="/orders">
                            <p>returns</p>
                            <span>Orders</span>
                        </Link>

                        <Link to="/cart" className={classes.cart}>
                            <BiCart size={35} />
                            <span>{totalItem}</span>
                        </Link>
                    </div>
                </div>
            </section >
            <LowerHeader />

        </section>
    )
}

export default Header