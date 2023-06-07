import React from "react"
import { useEffect, useState } from "react";

const HomeInventoryCard = () => {

    return (
        <section className="TheCard">
            <c-card>
                <img cCardImg="top" src="" />
                <c-card-body>
                    <h5 cCardTitle>Card title</h5>
                    <p cCardText>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </p>
                    <i onclick="myFunction(this)" class="fa fa-thumbs-up"></i>
                </c-card-body>
            </c-card>
        </section>
    )
}

export default HomeInventoryCard

