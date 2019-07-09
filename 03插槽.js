    var layout = {
        template:`
            <div class="contenter">
                <header>
                    <slot name="header"></slot>
                </header>
                <div class="content">
                    <div class="aside">
                        <slot name="aside"></slot>
                    </div>
                    <div class="main">
                        <slot name="main"></slot>
                    </div>
                    <div class="article">
                        <slot name="article"></slot>
                    </div>
                </div>
                <div class="footer">
                    <slot name="footer"></slot>
                </div>
            </div>
        `
    }