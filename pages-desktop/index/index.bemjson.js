({
    block: 'b-page',
    title: 'clerBEM',
    head: [
        { elem: 'css', url: '_index.css', ie: false },
        { elem: 'css', url: '_index.ie.css', ie: 'lt IE 8' },
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', url: '_index.js' }
    ],
    content: [{
    	block: 'b-header',
    	content: {
    		elem: 'inner',
    		content: [{
                elem: 'left',
                content: [{
                    block: 'b-logo',
                    content: [{
                        elem: 'logo',
                        tag: 'img',
                        attrs: {
                            src: '/blocks-desktop/b-logo/__logo/logo.png'
                        }
                    },{
                        elem: 'text',
                        content: 'Simply the forefront of your work...showcase in style my friend.'
                    }]
                },{
                    block: 'b-menu',
                    content: {
                        elem: 'inner',
                        content: [{
                            elem: 'title',
                            content: 'Quick&nbsp;links:'
                        },{
                            elem: 'content',
                            content: [{
                                elem: 'item',
                                tag: 'a',
                                attrs: {
                                    href: '#'
                                },
                                content: 'Forrst'
                            },{
                                elem: 'item',
                                tag: 'a',
                                attrs: {
                                    href: '#'
                                },
                                content: 'Facebook'
                            },{
                                elem: 'item',
                                tag: 'a',
                                attrs: {
                                    href: '#'
                                },
                                content: 'Twitter'
                            }]
                        }]
                    }
                },{
                    block: 'b-post',
                    content: [{
                        elem: 'avatar',
                        tag: 'img',
                        attrs: {
                            src: '/blocks-desktop/b-post/__avatar/b-post__avatar.png'
                        }
                    },{
                        elem: 'title',
                        content: 'Yo, I’am Johnny Doe.'
                    },{
                        elem: 'text',
                        tag: 'p',
                        content: 'Iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae abillo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit.'
                    },{
                        elem: 'text',
                        tag: 'p',
                        content: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat.'
                    },{
                        elem: 'text',
                        mods: {
                            type: 'quote'
                        },
                        tag: 'p',
                        content: '“Everything is designed. Few things are designed well...” - Brian Reed'
                    }]
                }]
            },{
                elem: 'right',
                content: {
                    block: 'b-form',
                    content: [{
                        elem: 'title',
                        content: 'Wanna Get in Touch?'
                    },{
                        elem: 'field',
                        tag: 'input',
                        attrs: {
                            type: 'text',
                            placeholder: '*Your Name: ...'
                        },
                        mods: {
                            type: 'solid'
                        }
                    },{
                        elem: 'field',
                        tag: 'input',
                        attrs: {
                            type: 'text',
                            placeholder: '*Your Mail: ...'
                        },
                        mods: {
                            type: 'solid'
                        }
                    },{
                        elem: 'area',
                        tag: 'textarea',
                        attrs: {
                            placeholder: '*Your Message: ...'
                        },
                        mods: {
                            type: 'solid'
                        }
                    },{
                        elem: 'button',
                        tag: 'button',
                        content: 'Submit ->'
                    }]
                }
            }]
    	}
    }]
})
