module.exports = {
    configurWebpack:{
        devServer:{
            //設置端口
            prot:3001,
            //自動打開
            open:true
        },
        resolve:{
            alias:{
                //配置components路徑別名
                'components' : '@/components'
            }
        }
    }
}