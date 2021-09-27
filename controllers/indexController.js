module.exports = {
    index: (req,res) => {
        return res.render('index', { 
            title: 'Balloons' 
        });
    },
    service: (req,res) =>{
        return res.render('services', { 
            title: 'Our Services - Balloons' 
        });
    },
    contact: (req,res) =>{
        return res.render('contact', { 
            title: 'Contact Us - Balloons' 
        });
    }
}