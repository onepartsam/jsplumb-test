import { NodeGroupType } from "../objects/enums";
import { IWorkflowSection } from "../objects/designer";

export const workflowLibraries: IWorkflowSection[] = [
  {
    Id: 0,
    Name: NodeGroupType.Sources,
    Description: "Data Sources",
    Operations: [
      {
        Id: 21,
        Name: "TagSource",
        Type: "TAG",
        Description: "Tag Source",
        Icon: "DataSources/SQL.png",
        NoInputs: 1,
        NoOutputs: 2,
        IsActive: true
      },
      {
        Id: 22,
        Name: "KPISource",
        Type: "KPI_SRC",
        Description: "KPI Source",
        Icon: "DataSources/SQL.png",
        NoInputs: 0,
        NoOutputs: 1,
        IsActive: true
      },
      {
        Id: 24,
        Name: "Attribute",
        Type: "ATTRIBUTE",
        Description: "Attribute",
        Icon: "DataSources/SQL.png",
        NoInputs: 0,
        NoOutputs: 1,
        IsActive: true
      },
      {
        Id: 25,
        Name: "DownTime",
        Type: "DOWNTIME",
        Description: "DownTime",
        Icon: "DataSources/SQL.png",
        NoInputs: 0,
        NoOutputs: 1,
        IsActive: true
      },
      {
        Id: 26,
        Name: "InMemorySource",
        Type: "IN_MEMORY_SRC",
        Description: "In Memory Source",
        Icon: "DataSources/SQL.png",
        NoInputs: 1,
        NoOutputs: 1,
        IsActive: true
      },
      {
        Id: 27,
        Name: "TableSource",
        Type: "TABLE_SOURCE",
        Description: "Table Source",
        Icon: "DataSources/SQL.png",
        NoInputs: 0,
        NoOutputs: 1,
        IsActive: true
      },
      //ADDED TO FIX THE ERROR
      //NOTE1: initially we don't have this block but when we integrate with service
      //some of the workflow configurations had this blocks.code throws error without this blocks
      //so added the missing blocks..
      {
        Id: 28,
        Name: "POWER_CURVE",
        Type: "POWER_CURVE",
        Description: "Power Curve",
        Icon: "DataSources/SQL.png",
        NoInputs: 0,
        NoOutputs: 1,
        IsActive: true
      }
    ]
  },
  // {
  //   Id: 0,
  //   Name: "DATASETS",
  //   Description: "Data Sets",
  //   Operations: [
  //     {
  //       Id: 2002,
  //       Name: "HourlyKPI",
  //       Type: "DATASET",
  //       Description: "HourlyKPI",
  //       Icon: "DSyncWorkFlowMenus/Datasets.png",
  //       NoInputs: 0,
  //       NoOutputs: 1,
  //       IsActive: true
  //     },
  //     {
  //       Id: 2003,
  //       Name: "DailyKPI",
  //       Type: "DATASET",
  //       Description: "DailyKPI",
  //       Icon: "DSyncWorkFlowMenus/Datasets.png",
  //       NoInputs: 0,
  //       NoOutputs: 1,
  //       IsActive: true
  //     }
  //   ]
  // },
  {
    Id: 2,
    Name: NodeGroupType.Classification,
    Description: "Data Mining and Classification",
    Operations: [
      {
        Id: 2,
        Name: "BayesianClassifier",
        Type: "BayesianClassifier",
        Description: "Bayesian Classifier",
        Icon: "DSyncWorkFlowMenus/BayesianClassifier.png",
        NoInputs: 1,
        NoOutputs: 1,
        IsActive: false
      },
      {
        Id: 3,
        Name: "Clustering",
        Type: "Clustering",
        Description: "Clustering",
        Icon: "DSyncWorkFlowMenus/Clustering.png",
        NoInputs: 1,
        NoOutputs: 1,
        IsActive: true
      },
      {
        Id: 14,
        Name: "PCA",
        Type: "PCA",
        Description: "Principle Component Analysis",
        Icon: "DSyncWorkFlowMenus/PCA.png",
        NoInputs: 1,
        NoOutputs: 1,
        IsActive: false
      },
      {
        Id: 18,
        Name: "SOMS",
        Type: "SOMS",
        Description: "Self Organizing Maps",
        Icon: "DSyncWorkFlowMenus/SOMS.png",
        NoInputs: 1,
        NoOutputs: 1,
        IsActive: true
      },
      {
        Id: 1005,
        Name: "SupportVector",
        Type: "SupportVector",
        Description: "Support Vector",
        Icon: "DSyncWorkFlowMenus/SupportVectorMachines.png",
        NoInputs: 1,
        NoOutputs: 1,
        IsActive: true
      }
    ]
  },
  {
    Id: 1,
    Name: NodeGroupType.Processors,
    Description: "Data Processing",
    Operations: [
      {
        Id: 1,
        Name: "Aggregator",
        Type: "AGGREGATOR",
        Description: "Data Aggregator",
        Icon: "DSyncWorkFlowMenus/Aggregation.png",
        NoInputs: 1,
        NoOutputs: 1,
        IsActive: true
      },
      {
        Id: 4,
        Name: "Filter",
        Type: "FILTER",
        Description: "Data Query",
        Icon: "DSyncWorkFlowMenus/DataFilter.png",
        NoInputs: 1,
        NoOutputs: 2,
        IsActive: true
      },
      {
        Id: 5,
        Name: "Join",
        Type: "JOIN",
        Description: "Merge Data",
        Icon: "DSyncWorkFlowMenus/DataMerge.png",
        NoInputs: 2,
        NoOutputs: 1,
        IsActive: true
      },
      {
        Id: 6,
        Name: "Mutator",
        Type: "MUTATOR",
        Description: "Formulae",
        Icon: "DSyncWorkFlowMenus/Formula.png",
        NoInputs: 1,
        NoOutputs: 1,
        IsActive: true
      },
      {
        Id: 11,
        Name: "Normalization",
        Type: "Normalization",
        Description: "Normalization",
        Icon: "DSyncWorkFlowMenus/Normalization.png",
        NoInputs: 1,
        NoOutputs: 1,
        IsActive: true
      },
      {
        Id: 3000,
        Name: "Thresholder",
        Type: "THRESHOLDER",
        Description: "Data Threshold",
        Icon: "DSyncWorkFlowMenus/Normalization.png",
        NoInputs: 1,
        NoOutputs: 1,
        IsActive: true
      },
      {
        Id: 3001,
        Name: "Clipper",
        Type: "CLIPPER",
        Description: "Data Clipper",
        Icon: "DSyncWorkFlowMenus/Normalization.png",
        NoInputs: 1,
        NoOutputs: 1,
        IsActive: true
      },
      {
        Id: 3002,
        Name: "Null_Filler",
        Type: "NULL_FILLER",
        Description: "Null Filler",
        Icon: "DSyncWorkFlowMenus/Normalization.png",
        NoInputs: 1,
        NoOutputs: 1,
        IsActive: true
      },
      {
        Id: 3003,
        Name: "Sort",
        Type: "SORT",
        Description: "Data Sort",
        Icon: "DSyncWorkFlowMenus/Normalization.png",
        NoInputs: 1,
        NoOutputs: 1,
        IsActive: true
      },
      {
        Id: 3004,
        Name: "Differentiator",
        Type: "DIFFERENTIATOR",
        Description: "Differential",
        Icon: "DSyncWorkFlowMenus/Normalization.png",
        NoInputs: 1,
        NoOutputs: 1,
        IsActive: true
      },
      {
        Id: 3005,
        Name: "RowSelection",
        Type: "ROW_SELECTION",
        Description: "Row Selection",
        Icon: "DSyncWorkFlowMenus/Normalization.png",
        NoInputs: 1,
        NoOutputs: 1,
        IsActive: true
      },
      {
        Id: 3006,
        Name: "RangeBinner",
        Type: "RANGE_BINNER",
        Description: "Binning",
        Icon: "DSyncWorkFlowMenus/Normalization.png",
        NoInputs: 1,
        NoOutputs: 1,
        IsActive: true
      },
      {
        Id: 3007,
        Name: "SwitchCase",
        Type: "SWITCH",
        Description: "Switch Case",
        Icon: "DSyncWorkFlowMenus/Normalization.png",
        NoInputs: 1,
        NoOutputs: 1,
        IsActive: true
      },
      //ADDED TO FIX THE ERROR (NOTE1)
      {
        Id: 3008,
        Name: "ACCUMULATOR",
        Type: "ACCUMULATOR",
        Description: "Accumulator",
        Icon: "DSyncWorkFlowMenus/Normalization.png",
        NoInputs: 1,
        NoOutputs: 1,
        IsActive: true
      }
    ]
  },
  {
    Id: 4000,
    Name: NodeGroupType.DateTime,
    Description: "Date/Time",
    Operations: [
      {
        Id: 4001,
        Name: "TimeDelay",
        Type: "TIME_DELAY",
        Description: "Time Delay",
        Icon: "DSyncWorkFlowMenus/FuzzyLogic.png",
        NoInputs: 1,
        NoOutputs: 1,
        IsActive: true
      },
      {
        Id: 4002,
        Name: "DateDifference",
        Type: "DATE_DIFF",
        Description: "Date Difference",
        Icon: "DSyncWorkFlowMenus/FuzzyLogic.png",
        NoInputs: 1,
        NoOutputs: 1,
        IsActive: true
      },
      {
        Id: 4003,
        Name: "TimeFilter",
        Type: "TIME_FILTER",
        Description: "Time Filter",
        Icon: "DSyncWorkFlowMenus/FuzzyLogic.png",
        NoInputs: 1,
        NoOutputs: 1,
        IsActive: true
      },
      //ADDED TO FIX THE ERROR (NOTE1)
      {
        Id: 4004,
        Name: "DATE_ADD",
        Type: "DATE_ADD",
        Description: "Date Add",
        Icon: "DSyncWorkFlowMenus/FuzzyLogic.png",
        NoInputs: 1,
        NoOutputs: 1,
        IsActive: true
      }
    ]
  },
  {
    Id: 5,
    Name: NodeGroupType.Deeplearning,
    Description: "Deep Learning",
    Operations: [
      {
        Id: 10,
        Name: "Neural_Network",
        Type: "Neural_Network",
        Description: "Neural Network",
        Icon: "DSyncWorkFlowMenus/NeuralNetworks.png",
        NoInputs: 1,
        NoOutputs: 1,
        IsActive: true
      },
      {
        Id: 1004,
        Name: "MultiLayerPerceptron",
        Type: "MultiLayerPerceptron",
        Description: "Multi-layer Perceptron",
        Icon: "DSyncWorkFlowMenus/Regression.png",
        NoInputs: 1,
        NoOutputs: 1,
        IsActive: true
      }
    ]
  },
  {
    Id: 7,
    Name: NodeGroupType.Heuristics,
    Description: "Heuristics",
    Operations: [
      {
        Id: 8,
        Name: "FuzzyLogic",
        Type: "FuzzyLogic",
        Description: "FuzzyLogic",
        Icon: "DSyncWorkFlowMenus/FuzzyLogic.png",
        NoInputs: 1,
        NoOutputs: 1,
        IsActive: false
      }
    ]
  },
  {
    Id: 4,
    Name: NodeGroupType.Machinelearning,
    Description: "Machine Learning",
    Operations: [
      {
        Id: 13,
        Name: "PatternMatching",
        Type: "PatternMatching",
        Description: "Pattern Matching",
        Icon: "DSyncWorkFlowMenus/PatternMatching.png",
        NoInputs: 1,
        NoOutputs: 1,
        IsActive: false
      },
      {
        Id: 1003,
        Name: "KMeansClustering",
        Type: "KMeansClustering",
        Description: "KMeans Clustering",
        Icon: "DSyncWorkFlowMenus/Clustering.png",
        NoInputs: 1,
        NoOutputs: 1,
        IsActive: true
      },
      {
        Id: 17,
        Name: "Regression",
        Type: "Regression",
        Description: "Regression Model",
        Icon: "DSyncWorkFlowMenus/Regression.png",
        NoInputs: 1,
        NoOutputs: 1,
        IsActive: true
      },
      {
        Id: 21,
        Name: "DecisionTree",
        Type: "DecisionTree",
        Description: "Decision Tree",
        Icon: "DSyncWorkFlowMenus/DecisionTree.png",
        NoInputs: 1,
        NoOutputs: 1,
        IsActive: true
      },
      {
        Id: 23,
        Name: "RandomForest",
        Type: "RandomForest",
        Description: "Random Forests",
        Icon: "DSyncWorkFlowMenus/RandomForest.png",
        NoInputs: 1,
        NoOutputs: 1,
        IsActive: true
      }
    ]
  },
  {
    Id: 6,
    Name: NodeGroupType.Modelintegration,
    Description: "External Models",
    Operations: [
      {
        Id: 9,
        Name: "HTWOO",
        Type: "HTWOO",
        Description: "H2O ",
        Icon: "DSyncWorkFlowMenus/H2O.png",
        NoInputs: 1,
        NoOutputs: 1,
        IsActive: false
      },
      {
        Id: 15,
        Name: "Python",
        Type: "Python",
        Description: "Python",
        Icon: "DSyncWorkFlowMenus/PythonScript.png",
        NoInputs: 1,
        NoOutputs: 1,
        IsActive: true
      },
      {
        Id: 16,
        Name: "R",
        Type: "R",
        Description: "R Model",
        Icon: "DSyncWorkFlowMenus/R_logo.png",
        NoInputs: 1,
        NoOutputs: 1,
        IsActive: true
      },
      {
        Id: 20,
        Name: "TridentStorm",
        Type: "TridentStorm",
        Description: "Apache Storm Bolt",
        Icon: "DSyncWorkFlowMenus/TridentStorm.png",
        NoInputs: 1,
        NoOutputs: 1,
        IsActive: false
      }
    ]
  },
  {
    Id: 8,
    Name: NodeGroupType.Optimization,
    Description: "Optimization Algorithms",
    Operations: [
      {
        Id: 12,
        Name: "Optimization",
        Type: "Optimization",
        Description: "Optimization",
        Icon: "DSyncWorkFlowMenus/Optimization.png",
        NoInputs: 1,
        NoOutputs: 1,
        IsActive: false
      }
    ]
  },
  {
    Id: 3,
    Name: NodeGroupType.Timeseries,
    Description: "Signal Processing",
    Operations: [
      {
        Id: 7,
        Name: "FreqTransform",
        Type: "FreqTransform",
        Description: "Frequency Domain",
        Icon: "DSyncWorkFlowMenus/FrequencyDomainAnalysis.png",
        NoInputs: 1,
        NoOutputs: 1,
        IsActive: false
      },
      {
        Id: 22,
        Name: "TimeSeries",
        Type: "TimeSeries",
        Description: "Time Series",
        Icon: "DSyncWorkFlowMenus/Timeseries.png",
        NoInputs: 1,
        NoOutputs: 1,
        IsActive: false
      }
    ]
  },
  {
    Id: 0,
    Name: NodeGroupType.Sinks,
    Description: "Sinks",
    Operations: [
      {
        Id: 0,
        Name: "ALERT",
        Type: "ALERT",
        Description: "Alert Sink",
        Icon: "DSyncWorkFlowMenus/Alert.png",
        NoInputs: 1,
        NoOutputs: 0,
        IsActive: true
      },
      {
        Id: 6000,
        Name: "InMemorySink",
        Type: "IN_MEMORY_SINK",
        Description: "In Memory Sink",
        Icon: "DSyncWorkFlowMenus/Datasets.png",
        NoInputs: 1,
        NoOutputs: 0,
        IsActive: true
      },
      {
        Id: 6001,
        Name: "KPISink",
        Type: "KPI",
        Description: "KPI Sink",
        Icon: "DSyncWorkFlowMenus/Datasets.png",
        NoInputs: 1,
        NoOutputs: 0,
        IsActive: true
      },
      {
        Id: 6002,
        Name: "TableSink",
        Type: "TABLE_SINK",
        Description: "Custom Table Sink",
        Icon: "DSyncWorkFlowMenus/Datasets.png",
        NoInputs: 1,
        NoOutputs: 0,
        IsActive: true
      },
      {
        Id: 6002,
        Name: "TagSink",
        Type: "TAG_SINK",
        Description: "Tag Sink",
        Icon: "DSyncWorkFlowMenus/Datasets.png",
        NoInputs: 1,
        NoOutputs: 0,
        IsActive: true
      },
      {
        Id: 6003,
        Name: "DowntimeSink",
        Type: "DOWNTIME_SINK",
        Description: "Downtime Sink",
        Icon: "DSyncWorkFlowMenus/Datasets.png",
        NoInputs: 1,
        NoOutputs: 0,
        IsActive: true
      },
      {
        Id: 6004,
        Name: "AssetStatusSink",
        Type: "ASSET_STATUS",
        Description: "Asset Status Sink",
        Icon: "DSyncWorkFlowMenus/Datasets.png",
        NoInputs: 1,
        NoOutputs: 0,
        IsActive: true
      }
    ]
  }
];
