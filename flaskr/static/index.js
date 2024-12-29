const vm = new Vue({ // Again, vm is our Vue instance's name for consistency.
    el: '#vm',
    delimiters: ['[[', ']]'],
    data: {
        greeting: 'Hello, Vue!'
    }
})

const vm_a = new Vue({ // Again, vm is our Vue instance's name for consistency.
    el: '#vm_a',
    delimiters: ['[[', ']]'],
    data: {
        greeting: 'Hello, Vue!'
    }
})

//document.getElementById("right_panel_btn").addEventListener("click", reload_data);

// function reload_data(){
//     const globe = document.getElementById('globe-container')
//     // const color = ['red', 'white', 'blue', 'green'][Math.round(Math.random() * 3)]
//     // globe.showGlobe(false)
//     window.print()

// }