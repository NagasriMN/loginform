Ext.define('Test1.view.main.login.loginView', {
	extend: 'Ext.Container',
	xtype: 'loginView',
	cls: 'loginView',
	layout: 'card',
	
      items: [
            {
				xtype:'panel',
				
				 fullscreen:true,
		 
			 //layout:'hbox',
			 defaultType:'textfield',
			 defaults:{
				 flex:1
			 },
			 items:[{
				 html:'Login Page',
				 style:'background-color:white'
			 },
                
            {
                        xtype: 'textfield',
                        fieldlabel: 'User Name',
                        id: 'userid',
                        allowBlank:false,
                        labelAlign: 'left'
                    },
                    {
                        xtype: 'passwordfield',
                        fieldlabel: 'Password',
                        id: 'passid',
                        allowBlank:false,
                        labelAlign: 'left'
                    },
                    {
                        xtype: 'button',
                        text: 'Login',
                        html: 'Login',
                        handler: function(){
                            Ext.Ajax.request({
                              var: username=Ext.getCmp('userid').getValue(),
                              var: password=Ext.getCmp('passid').getValue(),

                              url:' http://localhost:3000/posts',
                            method: 'POST',
                             jsonData:{
                                name: username,
                                pass: password
                                },
                             success: function (response){
                                 Ext.Msg.alert("Login Successful");
                             },
                                failure: function (response){
                                    Ext.Msg.alert("Login Failed");
                             }
                     })
                        
                    }
                } 
                    
                    
                ]
            }
        ]
    });

    /*    var myStore = Ext.create('Ext.data.Store', {
            model: 'User',
            proxy: {
                type: 'ajax',
                url: 'C:/Users/Administrator/Test1/db.json',
                reader: {
                    type: 'json',
                    rootProperty: 'users'
                }
            },
            autoLoad: true
        }) */
    

	/*
	{
	xtype:'button',
    text:'Save',
	handler: function(){
        Ext.Ajax.request({
          url:' http://localhost:3000/posts',
        method: 'Post',
         jsonData:{
         name:'Nagasri'
            },
         success: function (response){
             Ext.Msg.alert(response);
         },
            failure: function (response){
                Ext.Msg.alert(response);
         }
 })

	}

	{
			xtype:'button',
			text:'Save',
			handler: function(){
			console.log('test');
			Ext.Ajax.request({
				url: ' http://localhost:3000/posts',
				 success:function (response){
					  const responseBody = Ext.decode(response.responseText)
					 console.log(responseBody);
				  }
			  })
		}
		} */


