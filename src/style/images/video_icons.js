import React from 'react';

export const MidPlayButton = (props) => {
    // console.log('midplay', props)
    return(
    <div style={{bottom: props.bottom}} onClick={props.handleClick}  className='mid_container'> 
        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            width="314.068px" height="314.068px" viewBox="0 0 314.068 314.068" 
            space="preserve" className='mid_play' fill='white'>
            <g id="_x33_56._Play">
            <path d="M293.002,78.53C249.646,3.435,153.618-22.296,78.529,21.068C3.434,64.418-22.298,160.442,21.066,235.534
            c43.35,75.095,139.375,100.83,214.465,57.47C310.627,249.639,336.371,153.62,293.002,78.53z M219.834,265.801
            c-60.067,34.692-136.894,14.106-171.576-45.973C13.568,159.761,34.161,82.935,94.23,48.26
            c60.071-34.69,136.894-14.106,171.578,45.971C300.493,154.307,279.906,231.117,219.834,265.801z M213.555,150.652l-82.214-47.949
            c-7.492-4.374-13.535-0.877-13.493,7.789l0.421,95.174c0.038,8.664,6.155,12.191,13.669,7.851l81.585-47.103
            C221.029,162.082,221.045,155.026,213.555,150.652z"/>
            </g>
        </svg>
    </div>
    )
}

    export const BottomPlayButton = (props) => (
        <div onClick={props.handleClick} className='bottomPlay_container'> 
            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                width="124.512px" height="124.512px" viewBox="0 0 124.512 124.512"
                space="preserve" className='bottom_play' fill='#fff'>
                <path d="M113.956,57.006l-97.4-56.2c-4-2.3-9,0.6-9,5.2v112.5c0,4.6,5,7.5,9,5.2l97.4-56.2
                C117.956,65.105,117.956,59.306,113.956,57.006z"/>
            </svg>
        </div>
    )


    export const BottomPauseButton = (props) => (
        <div onClick={props.handleClick} className='bottomPause_container'>
            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 232.679 232.679" space="preserve" className='bottom_pause' fill='#fff'>
                <g id="Pause">
                <path d="M80.543,0H35.797c-9.885,0-17.898,8.014-17.898,17.898v196.883
                c0,9.885,8.013,17.898,17.898,17.898h44.746c9.885,0,17.898-8.013,17.898-17.898V17.898C98.44,8.014,90.427,0,80.543,0z M196.882,0
                h-44.746c-9.886,0-17.899,8.014-17.899,17.898v196.883c0,9.885,8.013,17.898,17.899,17.898h44.746
                c9.885,0,17.898-8.013,17.898-17.898V17.898C214.781,8.014,206.767,0,196.882,0z"/>
                </g>
            </svg>
        </div>
    )

    export const SpeakerSound = (props) => (
        <div onClick={() => props.handleClick()} className='speakerSound_container'> 
            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 27.717 27.717" space="preserve" className='speaker_sound' fill='#fff'>
                <g id="c74_volume">
                <path d="M4.637,8.725H0v10.33h4.637l8.766,6.502c0,0,1.611,1.346,1.611-0.045c0-1.395,0-22.177,      0-23.446
                    c0-1.092-1.418-0.025-1.418-0.025L4.637,8.725z"/>
                <path d="M20.006,6.709c-0.461-0.46-1.207-0.46-1.668,0c-0.461,0.462-0.461,1.211,0,1.666c1.518,     1.521,2.27,3.495,2.273,5.484
                    c-0.004,1.993-0.756,3.979-2.273,5.495c-0.461,0.459-0.461,1.211,0,1.672c0.23,0.23,0.531,0.344,0.836,0.344
                    c0.301,0,0.602-0.113,0.832-0.344c1.977-1.979,2.965-4.578,2.963-7.167C22.971,11.273,21.98,8.682,20.006,6.709z"/>
                <path d="M23.207,2.994c-0.467-0.463-1.211-0.463-1.676,0c-0.457,0.463-0.457,1.208,0,               1.671c2.549,2.548,3.822,5.869,3.824,9.206
                    c-0.002,3.352-1.27,6.694-3.824,9.25c-0.459,0.461-0.457,1.207,0,1.67c0.232,0.229,0.537,0.344,0.838,0.344
                    c0.303,0,0.607-0.115,0.838-0.344c3.006-3.018,4.51-6.973,4.51-10.92C27.717,9.937,26.203,5.996,23.207,2.994z"/>
                </g>
                <g id="Capa_1_145_">
                </g>
            </svg>
        </div>
    )

    export const SpeakerNoSound = (props) => ( 
        <div onClick={props.handleClick} className='speakerNoSound_container'> 
            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 508.528 508.528" space="preserve" className='speaker_no_sound' fill='#fff'>
                <path d="M263.54,0.116c-5.784-0.54-12.554,0.858-20.531,5.689c0, 0-132.533,115.625-138.317,          121.314H31.782
                    C14.239,127.15,0,141.389,0,158.933v194.731c0,17.607,14.239,31.782,31.782,31.782h72.941
                    c5.784,5.753,138.317,117.277,138.317,117.277c7.977,4.799,14.747,6.229,20.531,5.689c11.76-1.112,20.023-10.965,22.534-21.358
                    c0.095-1.017,0.095-464.533-0.064-465.55C283.563,11.081,275.268,1.228,263.54,0.116z"/>
                <path d="M447.974,254.28l54.857-54.857c7.596-7.564,7.596-19.864,0-27.428
                    c-7.564-7.564-19.864-7.564-27.428,0l-54.857,54.888l-54.888-54.888c-7.532-7.564-19.864-7.564-27.397,0
                    c-7.564,7.564-7.564,19.864,0,27.428l54.857,54.857l-54.857,54.888c-7.564,7.532-7.564,19.864,0,27.396
                    c7.532,7.564,19.864,7.564,27.396,0l54.888-54.857l54.857,54.857c7.564,7.564,19.864,7.564,27.428,0 c7.564-7.532,7.564-19.864,0-27.396L447.974,254.28z"/>
            </svg>
        </div>
    )

    export const Minimize = () => (
        <div className='minimize_container'> 
            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 16 16" space="preserve" className='minimize' fill='#fff'>
                <path d="M2.121,9c-0.553,0-1,0.448-1,1s0.447,1,1,1h1.465l-3.293,3.293c-0.391,0.391-0.391,1.023,0,1.414
                    C0.488,15.902,0.744,16,1,16s0.512-0.098,0.707-0.293l3.414-3.414V14c0,0.552,0.447,1,1,1S7,14.552,7,14V9H2.121z" />
                <path d="M3,7c0.552,0,1-0.448,1-1V4h2c0.553,0,1-0.448,1-1S6.553,2,6,2H2.001L2,6C2,6.552,2.447,7,3,7z" display='none'/>
                <path d="M13,9c-0.553,0-1,0.448-1,1v2h-2c-0.553,0-1,0.448-1,1s0.447,1,1,1h4v-4C14,9.448,13.553,9,13,9z" display='none'/>
                <path d="M14.293,0.293L11,3.586V2c0-0.552-0.447-1-1-1S9,1.448,9,2v5h5c0.552,0,1-0.448,1-1s-0.447-1-1-1
                h-1.586l3.293-3.292c0.391-0.391,0.391-1.023,0-1.414S14.684-0.098,14.293,0.293z"/>
            </svg>
        </div>
    )

    export const Expand = () => (
        <div className='expand_container'>
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    viewBox="0 0 512 512" space="preserve" className='expand' fill='#fff'>
                <path d="M0,0v512h512V0H0z M469.333,469.333H42.667V42.667h426.667V469.333z" display='none'/>
                <path d="M106.667,234.667c11.782,0,21.333-9.551,21.333-21.333V158.17l70.248,70.248c8.331,8.331,21.839,8.331,30.17,0
                s8.331-21.839,0-30.17L158.17,128h55.163c11.782,0,21.333-9.551,21.333-21.333c0-11.782-9.551-21.333-21.333-21.333H106.667
                c-0.703,0-1.405,0.037-2.105,0.106c-0.318,0.031-0.627,0.091-0.94,0.136c-0.375,0.054-0.75,0.098-1.122,0.171
                c-0.359,0.071-0.708,0.17-1.061,0.259c-0.322,0.081-0.645,0.151-0.964,0.248c-0.346,0.105-0.68,0.234-1.018,0.356
                c-0.318,0.114-0.639,0.219-0.953,0.349c-0.316,0.131-0.618,0.284-0.926,0.43c-0.323,0.152-0.649,0.296-0.966,0.465
                c-0.295,0.158-0.575,0.338-0.861,0.509c-0.311,0.186-0.626,0.361-0.929,0.564c-0.316,0.211-0.613,0.447-0.917,0.674
                c-0.253,0.19-0.513,0.365-0.759,0.568c-1.087,0.892-2.085,1.889-2.977,2.977c-0.202,0.246-0.378,0.506-0.568,0.759
                c-0.228,0.304-0.463,0.601-0.674,0.917c-0.203,0.303-0.379,0.618-0.564,0.929c-0.171,0.286-0.351,0.566-0.509,0.861
                c-0.169,0.317-0.313,0.643-0.465,0.966c-0.145,0.308-0.299,0.611-0.43,0.926c-0.13,0.314-0.235,0.635-0.349,0.953
                c-0.122,0.338-0.251,0.672-0.356,1.018c-0.096,0.318-0.167,0.642-0.248,0.964c-0.089,0.353-0.188,0.701-0.259,1.061
                c-0.074,0.372-0.118,0.748-0.171,1.122c-0.045,0.314-0.104,0.622-0.136,0.94c-0.068,0.693-0.105,1.388-0.105,2.084
                c0,0.007-0.001,0.014-0.001,0.021v106.667C85.333,225.115,94.885,234.667,106.667,234.667z"/>
                <path d="M277.333,405.333c0,11.782,9.551,21.333,21.333,21.333h106.667c0.703,0,1.405-0.037,2.105-0.106
                c0.316-0.031,0.622-0.09,0.933-0.135c0.377-0.054,0.755-0.098,1.13-0.172c0.358-0.071,0.705-0.169,1.056-0.258
                c0.323-0.081,0.648-0.152,0.968-0.249c0.345-0.104,0.677-0.234,1.014-0.355c0.32-0.115,0.642-0.22,0.957-0.35
                c0.314-0.13,0.615-0.283,0.921-0.428c0.325-0.153,0.653-0.297,0.971-0.468c0.293-0.157,0.572-0.336,0.857-0.506
                c0.312-0.186,0.628-0.363,0.932-0.566c0.315-0.211,0.611-0.445,0.913-0.671c0.255-0.191,0.516-0.368,0.764-0.571
                c0.535-0.439,1.05-0.903,1.54-1.392c0.008-0.007,0.016-0.014,0.023-0.021s0.014-0.016,0.021-0.023
                c0.488-0.49,0.952-1.004,1.392-1.54c0.204-0.248,0.38-0.509,0.571-0.764c0.226-0.302,0.461-0.598,0.671-0.913
                c0.204-0.304,0.38-0.62,0.566-0.932c0.17-0.285,0.349-0.564,0.506-0.857c0.17-0.318,0.315-0.646,0.468-0.971
                c0.145-0.306,0.297-0.607,0.428-0.921c0.13-0.315,0.236-0.637,0.35-0.957c0.121-0.337,0.25-0.669,0.355-1.014
                c0.097-0.32,0.168-0.645,0.249-0.968c0.089-0.351,0.187-0.698,0.258-1.056c0.074-0.375,0.118-0.753,0.172-1.13
                c0.044-0.311,0.104-0.618,0.135-0.933c0.069-0.701,0.106-1.403,0.106-2.107V298.667c0-11.782-9.551-21.333-21.333-21.333
                c-11.782,0-21.333,9.551-21.333,21.333v55.163l-70.248-70.248c-8.331-8.331-21.839-8.331-30.17,0s-8.331,21.839,0,30.17
                L353.83,384h-55.163C286.885,384,277.333,393.551,277.333,405.333z"/>
            </svg>
        </div>
    )

