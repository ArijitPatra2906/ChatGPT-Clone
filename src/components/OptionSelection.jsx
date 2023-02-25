import React from 'react'

export default function OptionSelection({ arrayItems, selectOption, selectFullOption }) {

    const select = (item) => {
        selectOption(item.option)
        selectFullOption(item)
    }

    return (
        <>
            <h1 className="heading">ChatGPT Clone</h1>
            <div className="grid-main">
                {arrayItems.map((item) => {
                    return (
                        <div
                            className="grid-child"
                            onClick={() => select(item)}
                        >
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                        </div>
                    );
                })}
            </div>
        </>
    )
}
