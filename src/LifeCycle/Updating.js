import React, { Component } from "react";

class Updating extends Component {
    state = {
        name: "",
        //some data that will get from server
        responseMessage: null
    }

    submitHandler = (e) => {
        e.preventDefault();

        //simulate sending data to server
        setTimeout(() => {
            this.setState({ responseMessage: "your name registerd successfuly" });
        }, 5000)
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        const topScroll = window.scrollY;
        const elementPosition = topScroll + document.getElementById("message").getBoundingClientRect().top;
        // check element and window scroll position distance
        const scrollToMessages = (topScroll > elementPosition + 300 || topScroll < elementPosition - 300);
        return { scrollToMessage: scrollToMessages };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (snapshot.scrollToMessage) {
            const elementPosition = window.scrollY + document.getElementById("message").getBoundingClientRect().top;
            window.scrollTo(0, elementPosition)
        }
    }

    render() {
        return (
            <React.Fragment>
                <h1>scroll to bottom of page</h1>
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                <form onSubmit={this.submitHandler} style={{ display: "table", margin: "0 auto" }}>
                    <div id="message">
                        {this.state.responseMessage ?? ""}
                    </div>
                    <input type="text" onChange={e => this.setState({ name: e.target.value })} />
                    <button>please click me then scroll to top of page</button>
                </form>
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            </React.Fragment>
        );
    }
}

export default Updating;