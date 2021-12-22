import React, { Component } from 'react'
import {AiOutlineUnorderedList} from 'react-icons/ai'
import {FaTable} from 'react-icons/fa'
import Button from '../../components/Button';
import Sty from '../../style/StyResumes';

export default class Resumes extends Component {
    render() {
        return (
            <Sty>
                <div className="head">
                    <h1 className="head__title">
                        My Resumes
                    </h1>
                    <div className="head__btns">
                        <p className="head__btn-label">
                            View:
                        </p>
                        <Button size="small" icon={<AiOutlineUnorderedList />} />
                        <Button size="small" icon={<FaTable />} />
                        {/* <button className="head__btn">
                            
                        </button> */}
                        {/* <button className="head__btn">
                            <FaTable />
                        </button> */}
                        <div className="head__btn-border"></div>
                        <Button size="big" title="Create new resume" />
                        {/* <button className="head__btn head__btn--big">
                            Create new resume
                        </button> */}
                    </div>
                </div>
            </Sty>
        )
    }
}
