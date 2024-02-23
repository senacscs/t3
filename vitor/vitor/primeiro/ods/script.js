let children = document.querySelector('ul').children;
        let i = 0;

        children[i].classList.add('active');// Item default selection

        
        
        function checkSelected() {
            const activeId = document.querySelector('.active').dataset.section
            const sections = document.querySelectorAll('.sections')
            const prevButton = document.getElementById('prev')
            const nextButton = document.getElementById('next')
            
            sections.forEach((section) => {
                console.log(section.id, activeId)
                if(section.id === activeId){
                    section.style.display = "block"
                    console.log('foi')
                } else {
                    section.style.display = "none"
                }
                if(activeId === 'menu'){
                    prevButton.style.display = "none"
                } else {
                    prevButton.style.display = 'inline'
                }
                if(activeId === 'ref'){
                    nextButton.style.display = 'none'
                } else {
                    nextButton.style.display = 'inline'
                }
            })
        }
        checkSelected();

        function resetClass() {
            for (let j = 0; j < children.length; j++) {
                children[j].classList.remove('active');
            }
        }

        function next() {
            if (i >= children.length - 1) {
                return false;
            }
            resetClass();
            
            i++;
            children[i].classList.add('active')
            checkSelected();
        }
        function previous() {
            if (i <= 0) {
                return false;
            }
            resetClass();
            
            i--;
            children[i].classList.add('active')
            checkSelected();
        }





