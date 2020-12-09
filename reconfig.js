cfg = rs.conf();

// Put reconfiguration settings here
rs.remove("mongo4:27017")
rs.addArb("mongo4:27017")

rs.reconfig(cfg);