exports.getAllNotifications = (req,res) => {
    const notifications = [
        {id :1,tittle:"Assignment Due", message: "Submit before 6 PM",read : false}, 
        {id :2,tittle:"Placement Drive", message: "Interview tommorrow",read : true}
    ];
    res.status(200).json({notifications});
};