const dat = {
  basic:{
    task:["Trajectory Next-Location Prediction","Traffic State Prediction"],
    dataset:[["foursquare_tky","gowalla"],["METR_LA","PEMS_BAY"]],
    model:[["DeepMove"],["DCRNN","AGCRN"]]
  },
  data:{
    batch_size:["64","128"],
    input_window:["12"],
    output_window:["12","1"],
    train_rate: ["0.6","0.7"],
    eval_rate: ["0.1","0.2"],
  },
  executor:{
    max_epoch: ["80","100","120"],
    learner: ["Adam","RMSprop"],
    learning_rate: ["1e-2","1e-3","1e-4","1e-5"],
    lr_scheduler: ["none","multisteplr","steplr"],
    step_size:["20"],
    lr_decay_ratio: ["0.1","0.7"],
  },
  evaluator:{
    metrics: ["MAE","MAPE","MSE","RMSE","masked_MAE","masked_MSE","masked_RMSE","masked_MAPE","R2","EVAR"]
  }
}

export default dat;