// priority: 0

ServerEvents.recipes(event => {




// Remove Recipes

  event.remove({ id: 'thoriumreactors:thorium_crafting/water_source_block'})
  event.remove({ id: 'thoriumreactors:thorium_crafting/machine_casing'})
  event.remove({ id: 'thoriumreactors:thorium_crafting/reactor_casing'})
  event.remove({ id: 'thoriumreactors:thorium_crafting/reactor_controller'})
  event.remove({ id: 'thoriumreactors:thorium_crafting/reactor_valve'})
  event.remove({ id: 'thoriumreactors:thorium_crafting/reactor_control_rod'})
  event.remove({ id: 'thoriumreactors:thorium_crafting/reactor_core'})
  event.remove({ id: 'thoriumreactors:thorium_crafting/turbine_casing'})
  event.remove({ id: 'thoriumreactors:thorium_crafting/turbine_constroller'})
  event.remove({ id: 'thoriumreactors:thorium_crafting/turbine_power_port'})
  event.remove({ id: 'thoriumreactors:thorium_crafting/turbine_valve'})
  event.remove({ id: 'thoriumreactors:thorium_crafting/turbine_rotation_mount'})
  event.remove({ id: 'thoriumreactors:thorium_crafting/turbine_vent'})
  event.remove({ id: 'thoriumreactors:thorium_crafting/electromagnetic_coil'})
  event.remove({ id: 'thoriumreactors:thorium_crafting/thermal_conductor'})
  event.remove({ id: 'thoriumreactors:thorium_crafting/thermal_heat_controller'})
  event.remove({ id: 'thoriumreactors:thorium_crafting/thermal_heat_valve'})
  event.remove({ id: 'thoriumreactors:thorium_crafting/thermal_heatsink'})
  event.remove({ id: 'thoriumreactors:thorium_crafting/reactor_glass'})
  event.remove({ id: 'thoriumreactors:thorium_crafting/turbine_glass'})
  event.remove({ id: 'thoriumreactors:thorium_crafting/reactor_graphite_moderator'})
  event.remove({ id: 'thoriumreactors:thorium_crafting/turbine_rotor'})
  event.remove({ id: 'thoriumreactors:thorium_crafting/configurator'})
  event.remove({ id: 'thoriumreactors:thorium_crafting/module_empty'})
  event.remove({ id: 'thoriumreactors:thorium_crafting/module_io'})
  event.remove({ id: 'thoriumreactors:thorium_crafting/module_energy'})
  event.remove({ id: 'thoriumreactors:thorium_crafting/module_storage'})
  event.remove({ id: 'thoriumreactors:thorium_crafting/module_tank'})
  event.remove({ id: 'thoriumreactors:thorium_crafting/module_sensor'})
  event.remove({ id: 'thoriumreactors:thorium_crafting/module_processing'})
  event.remove({ id: 'thoriumreactors:thorium_crafting/graphite_tube'})
  event.remove({ id: 'thoriumreactors:thorium_crafting/redstone_processor'})
  event.remove({ id: 'thoriumreactors:thorium_crafting/generator'})
  event.remove({ id: 'thoriumreactors:thorium_crafting/fluid_evaporation'})
  event.remove({ id: 'thoriumreactors:thorium_crafting/electrolytic_salt_separator'})
  event.remove({ id: 'thoriumreactors:thorium_crafting/salt_melter'})
  event.remove({ id: 'thoriumreactors:thorium_crafting/concentrator_block'})
  event.remove({ id: 'thoriumreactors:thorium_crafting/decomposer_block'})
  event.remove({ id: 'thoriumreactors:thorium_crafting/uranium_oxidizer_block'})
  event.remove({ id: 'thoriumreactors:thorium_crafting/fluid_centrifuge'})
  event.remove({ id: 'thoriumreactors:thorium_crafting/crystallizer'})
  event.remove({ id: 'thoriumreactors:thorium_crafting/blast_furnace'})
  event.remove({ id: 'thoriumreactors:thorium_crafting/fluid_enricher'})
  event.remove({ id: 'thoriumreactors:evaporating/sodium'})
  event.remove({ id: 'thoriumreactors:electrolysing/potassium'})
  event.remove({ id: 'thoriumreactors:concentrating/yellow_cake'})
  event.remove({ id: 'thoriumreactors:crystallizing/enriched_uranium_pellet'})





// Phase 1 of Thorium Reactor Recipes

     
event.recipes.gtceu.implosion_compressor('blasted_stone')
  .itemInputs(
    '2x gtceu:polished_dark_concrete',
    'minecraft:tnt'
  )
  .itemOutputs(
    '2x thoriumreactors:blasted_stone'
  )
  .duration(800)
  .EUt(1920)
     
event.recipes.gtceu.implosion_compressor('blasted_iron_ingot')
  .itemInputs(
    '2x #forge:ingots/wrought_iron',
    'minecraft:tnt'
  )
  .itemOutputs(
    '2x thoriumreactors:blasted_iron_ingot'
  )
  .duration(800)
  .EUt(1920)
  
event.recipes.gtceu.autoclave('enriched_uranium_pellet')
  .inputFluids(
    Fluid.of("thoriumreactors:enriched_uranium_hexafluorite", 600)
  )
  .itemOutputs(
    'thoriumreactors:enriched_uranium'
  )
  .duration(1000)
  .EUt(1920)

event.recipes.gtceu.centrifuge('enriched_uranium_hexafluorite')
  .inputFluids(
    Fluid.of("thoriumreactors:uranium_hexafluorite", 1000)
  )
  .outputFluids(
    Fluid.of("thoriumreactors:enriched_uranium_hexafluorite", 1000)
  )
  .duration(400)
  .EUt(1920)
  .cleanroom(CleanroomType.CLEANROOM)

event.recipes.gtceu.chemical_reactor('enriched_uranium_hexafluorite')
  .itemInputs(
  'thoriumreactors:yellow_cake'
  )
  .inputFluids(
    Fluid.of("thoriumreactors:hydrofluorite", 1000)
  )
  .outputFluids(
    Fluid.of("thoriumreactors:uranium_hexafluorite", 1000)
  )
  .duration(400)
  .EUt(1920)
  .cleanroom(CleanroomType.CLEANROOM)
  
event.recipes.gtceu.chemical_reactor('hydrofluorite')
  .itemInputs(
    '#forge:dusts/fluorite'
  )
  .inputFluids(
    Fluid.of("gtceu:distilled_water", 200)
  )
  .outputFluids(
    Fluid.of("thoriumreactors:hydrofluorite", 200)
  )
  .duration(100)
  .EUt(1920)

event.recipes.gtceu.compressor('yellow_cake')
  .itemInputs(
    'gtnn:enriched_uranium'
  )
  .itemOutputs(
    '3x thoriumreactors:yellow_cake'
  )
  .duration(200)
  .EUt(1920)
  
event.recipes.gtceu.fluid_heater('molten_salt')
  .itemInputs(
    '4x #forge:dusts/thorium'
  )
  .inputFluids(
    Fluid.of("gtceu:sodium_potassium", 1000)
  )
  .outputFluids(
    Fluid.of("thoriumreactors:molten_salt", 200)
  )
  .duration(400)
  .EUt(1920)

event.recipes.gtceu.fluid_heater('molten_salt_from_depleted')
  .itemInputs(
    '12x #forge:dusts/thorium'
  )
  .inputFluids(
    Fluid.of("thoriumreactors:depleted_molten_salt", 6000)
  )
  .outputFluids(
    Fluid.of("thoriumreactors:molten_salt", 6000)
  )
  .duration(400)
  .EUt(1920)

  //Thorium Reactors Temporary(?) Recipe to get Fluorite
event.recipes.gtceu.autoclave('fluorite')
  .itemInputs(
    '#forge:dusts/calcium'
  )
  .inputFluids(
    Fluid.of("gtceu:fluorine", 2000)
  )
  .itemOutputs(
    '3x gcyr:fluorite_gem'
  )
  .duration(160)
  .EUt(1920)
  
  //Thorium Reactors Recipes Phase 2
event.recipes.gtceu.assembler('thoriumreactors:reactor_glass')
  .itemInputs(
    'thoriumreactors:reactor_casing',
    '3x gtceu:tempered_glass',
    '8x thoriumreactors:graphite_nugget'
  )
  .itemOutputs(
    '2x thoriumreactors:reactor_glass'
  )
  .duration(160)
  .EUt(480)

event.recipes.gtceu.assembler('thoriumreactors:reactor_graphite_moderator')
  .itemInputs(
    '25x thoriumreactors:graphite_tube'
  )
  .itemOutputs(
    'thoriumreactors:reactor_graphite_moderator'
  )
  .duration(400)
  .EUt(1920)

event.recipes.gtceu.assembler('thoriumreactors:reactor_core')
  .itemInputs(
    'thoriumreactors:reactor_casing',
    'thoriumreactors:module_sensor',
    'thoriumreactors:module_storage',
    'thoriumreactors:reactor_graphite_moderator'
  )
  .itemOutputs(
    'thoriumreactors:reactor_core'
  )
  .duration(600)
  .EUt(1920)
  .cleanroom(CleanroomType.CLEANROOM)

event.recipes.gtceu.assembler('thoriumreactors:reactor_rod_controller')
  .itemInputs(
    'thoriumreactors:reactor_casing',
    'thoriumreactors:reactor_graphite_moderator',
    'gtceu:ev_conveyor_module',
    'thoriumreactors:module_sensor'
  )
  .itemOutputs(
    'thoriumreactors:reactor_rod_controller'
  )
  .duration(300)
  .EUt(1920)

event.recipes.gtceu.assembler('thoriumreactors:reactor_valve')
  .itemInputs(
    'thoriumreactors:reactor_casing',
    'thoriumreactors:module_tank'
  )
  .itemOutputs(
    'thoriumreactors:reactor_valve'
  )
  .duration(300)
  .EUt(1920)

event.recipes.gtceu.assembler('thoriumreactors:reactor_controller')
  .itemInputs(
    'thoriumreactors:reactor_casing',
    'thoriumreactors:machine_casing',
    'thoriumreactors:redstone_processor',
    'gtceu:computer_monitor_cover'
  )
  .itemOutputs(
    'thoriumreactors:reactor_controller'
  )
  .duration(600)
  .EUt(1920)


event.recipes.gtceu.assembler('thoriumreactors:graphite_tube')
  .itemInputs(
    '2x thoriumreactors:graphite_ingot',
    '4x gtceu:carbon_fiber_mesh'
  )
  .inputFluids(
    Fluid.of("gtceu:reinforced_epoxy_resin", 144)
  )
  .itemOutputs(
    'thoriumreactors:graphite_tube'
  )
  .duration(120)
  .EUt(480)

event.recipes.gtceu.assembler('thoriumreactors:reactor_casing')
  .itemInputs(
    '4x thoriumreactors:blasted_stone',
    '2x gtceu:double_lead_plate',
    '4x thoriumreactors:blasted_iron_ingot',
    '2x gtceu:titanium_frame'
  )
  .itemOutputs(
    '2x thoriumreactors:reactor_casing'
  )
  .duration(160)
  .EUt(1920)

event.recipes.gtceu.assembler('thoriumreactors:machine_casing')
  .itemInputs(
    'thoriumreactors:module_energy',
    'thoriumreactors:module_io',
    'thoriumreactors:module_processing',
    'thoriumreactors:module_storage',
    'gtceu:ev_machine_hull'
  )
  .itemOutputs(
    'thoriumreactors:machine_casing'
  )
  .duration(200)
  .EUt(1920)

event.recipes.gtceu.assembler('thoriumreactors:configurator')
  .itemInputs(
    'thoriumreactors:module_empty',
    'gtceu:data_stick',
    'thoriumreactors:redstone_processor',
    'gtceu:radioactive_hazard_sign_block'
  )
  .itemOutputs(
    'thoriumreactors:configurator'
  )
  .duration(360)
  .EUt(1920)

  //Thorium Reactors Phase 3
event.recipes.gtceu.circuit_assembler('thoriumreactors:module_empty')
  .itemInputs(
    'thoriumreactors:redstone_processor',
    'gtceu:data_stick',
    '#gtceu:circuits/hv'
  )
  .inputFluids(
    Fluid.of("gtceu:polytetrafluoroethylene", 144)
  )
  .itemOutputs(
    'thoriumreactors:module_empty'
  )
  .duration(200)
  .EUt(480)
	
event.recipes.gtceu.circuit_assembler('thoriumreactors:module_io')
  .itemInputs(
    'thoriumreactors:module_empty',
    'gtceu:item_filter',
    'gtceu:ev_robot_arm'
  )
  .inputFluids(
    Fluid.of("gtceu:polytetrafluoroethylene", 144)
  )
  .itemOutputs(
    'thoriumreactors:module_io'
  )
  .duration(200)
  .EUt(1920)
	
event.recipes.gtceu.circuit_assembler('thoriumreactors:module_energy')
  .itemInputs(
    'thoriumreactors:module_empty',
    'gtceu:advanced_energy_detector_cover',
    'gtceu:engraved_lapotron_crystal_chip'
  )
  .inputFluids(
    Fluid.of("gtceu:polytetrafluoroethylene", 144)
  )
  .itemOutputs(
    'thoriumreactors:module_energy'
  )
  .duration(200)
  .EUt(1920)
	
event.recipes.gtceu.circuit_assembler('thoriumreactors:module_storage')
  .itemInputs(
    'thoriumreactors:module_empty',
    'gtceu:ev_conveyor_module'
  )
  .inputFluids(
    Fluid.of("gtceu:polytetrafluoroethylene", 144)
  )
  .itemOutputs(
    'thoriumreactors:module_storage'
  )
  .duration(200)
  .EUt(1920)
	
event.recipes.gtceu.circuit_assembler('thoriumreactors:module_tank')
  .itemInputs(
    'thoriumreactors:module_empty',
    'gtceu:ev_electric_pump'
  )
  .inputFluids(
    Fluid.of("gtceu:polytetrafluoroethylene", 144)
  )
  .itemOutputs(
    'thoriumreactors:module_tank'
  )
  .duration(200)
  .EUt(1920)
	
event.recipes.gtceu.circuit_assembler('thoriumreactors:module_sensor')
  .itemInputs(
    'thoriumreactors:module_empty',
    'gtceu:advanced_fluid_detector_cover',
    'gtceu:advanced_item_detector_cover'
  )
  .inputFluids(
    Fluid.of("gtceu:polytetrafluoroethylene", 144)
  )
  .itemOutputs(
    'thoriumreactors:module_sensor'
  )
  .duration(200)
  .EUt(1920)
	
event.recipes.gtceu.circuit_assembler('thoriumreactors:module_processing')
  .itemInputs(
    'thoriumreactors:module_empty',
    '4x gtceu:ram_chip'
  )
  .inputFluids(
    Fluid.of("gtceu:polytetrafluoroethylene", 144)
  )
  .itemOutputs(
    'thoriumreactors:module_processing'
  )
  .duration(200)
  .EUt(1920)
	
event.recipes.gtceu.circuit_assembler('thoriumreactors:redstone_processor')
  .itemInputs(
    'gtceu:lpic_chip',
    '#gtceu:circuits/mv',
    'ae2:logic_processor',
    '#forge:plates/redstone'
  )
  .inputFluids(
    Fluid.of("gtceu:polytetrafluoroethylene", 144)
  )
  .itemOutputs(
    'thoriumreactors:redstone_processor'
  )
  .duration(200)
  .EUt(480)

  //ThoriumReactors Phase 4
event.recipes.gtceu.assembler('thoriumreactors:turbine_casing')
  .itemInputs(
    '4x thoriumreactors:blasted_stone',
    '2x gtceu:plascrete',
    '4x thoriumreactors:blasted_iron_ingot',
    '2x gtceu:titanium_frame'
  )
  .itemOutputs(
    '2x thoriumreactors:turbine_casing'
  )
  .duration(160)
  .EUt(1920)

event.recipes.gtceu.assembler('thoriumreactors:thermal_conductor')
  .itemInputs(
    '4x thoriumreactors:blasted_stone',
    '2x gtceu:nichrome_coil_block',
    '4x thoriumreactors:blasted_iron_ingot',
    '2x gtceu:titanium_frame'
  )
  .itemOutputs(
    '2x thoriumreactors:thermal_conductor'
  )
  .duration(160)
  .EUt(1920)

event.recipes.gtceu.assembler('thoriumreactors:turbine_valve')
  .itemInputs(
    'thoriumreactors:turbine_casing',
    'thoriumreactors:module_tank'
  )
  .itemOutputs(
    'thoriumreactors:turbine_valve'
  )
  .duration(300)
  .EUt(1920)

event.recipes.gtceu.assembler('thoriumreactors:turbine_power_port')
  .itemInputs(
    'thoriumreactors:turbine_casing',
    'thoriumreactors:module_energy'
  )
  .itemOutputs(
    'thoriumreactors:turbine_power_port'
  )
  .duration(300)
  .EUt(1920)

event.recipes.gtceu.assembler('thoriumreactors:turbine_controller')
  .itemInputs(
    'thoriumreactors:turbine_casing',
    'thoriumreactors:machine_casing',
    'thoriumreactors:redstone_processor',
    'gtceu:computer_monitor_cover'
  )
  .itemOutputs(
    'thoriumreactors:turbine_controller'
  )
  .duration(600)
  .EUt(1920)

event.recipes.gtceu.assembler('thoriumreactors:thermal_valve')
  .itemInputs(
    'thoriumreactors:thermal_conductor',
    'thoriumreactors:module_tank'
  )
  .itemOutputs(
    'thoriumreactors:thermal_valve'
  )
  .duration(300)
  .EUt(1920)

event.recipes.gtceu.assembler('thoriumreactors:thermal_controller')
  .itemInputs(
    'thoriumreactors:thermal_conductor',
    'thoriumreactors:machine_casing',
    'gtceu:computer_monitor_cover'
  )
  .itemOutputs(
    'thoriumreactors:thermal_controller'
  )
  .duration(600)
  .EUt(1920)

event.recipes.gtceu.assembler('thoriumreactors:turbine_glass')
  .itemInputs(
    'thoriumreactors:turbine_casing',
    '3x gtceu:tempered_glass',
    '2x gtceu:reactorglass'
  )
  .itemOutputs(
    '2x thoriumreactors:turbine_glass'
  )
  .duration(160)
  .EUt(480)

event.recipes.gtceu.assembler('thoriumreactors:thermal_heat_sink')
  .itemInputs(
    'thoriumreactors:thermal_conductor',
    '6x #forge:plates/copper'
  )
  .itemOutputs(
    'thoriumreactors:thermal_heat_sink'
  )
  .duration(160)
  .EUt(1920)

event.recipes.gtceu.assembler('thoriumreactors:turbine_vent')
  .itemInputs(
    'thoriumreactors:turbine_casing',
    '3x gtceu:titanium_plate'
  )
  .itemOutputs(
    'thoriumreactors:turbine_vent'
  )
  .duration(160)
  .EUt(1920)

event.recipes.gtceu.assembler('thoriumreactors:turbine_rotation_mount')
  .itemInputs(
    'thoriumreactors:turbine_casing',
    'thoriumreactors:turbine_rotor'
  )
  .itemOutputs(
    'thoriumreactors:turbine_rotation_mount'
  )
  .duration(160)
  .EUt(1920)

event.recipes.gtceu.forming_press('thoriumreactors:turbine_rotor')
  .itemInputs(
    '2x gtceu:long_steel_rod',
    '4x thoriumreactors:blasted_iron_ingot',
    '4x gtceu:carbon_fiber_mesh'
  )
  .itemOutputs(
    'thoriumreactors:turbine_rotor'
  )
  .duration(80)
  .EUt(1920)

event.recipes.gtceu.assembler('thoriumreactors:electromagnetic_coil')
  .itemInputs(
    'gtceu:magnetic_neodymium_block',
    '16x gtceu:annealed_copper_single_wire'
  )
  .itemOutputs(
    'thoriumreactors:electromagnetic_coil'
  )
  .duration(160)
  .EUt(1920)

  //ThoriumReactors Phase 5
event.recipes.gtceu.arc_furnace('thoriumreactors:graphite_ingot')
  .itemInputs(
    'gtceu:graphite_dust'
  )
  .inputFluids(
    Fluid.of("gtceu:nitrogen", 100)
  )
  .itemOutputs(
    'thoriumreactors:graphite_ingot'
  )
  .duration(60)
  .EUt(480)

event.recipes.gtceu.autoclave('thoriumreactors:enriched_uranium_pellet_2')
  .itemInputs(
    'thoriumreactors:depleted_uranium'
  )
  .inputFluids(
    Fluid.of("thoriumreactors:enriched_uranium_hexafluorite", 400)
  )
  .itemOutputs(
    'thoriumreactors:enriched_uranium'
  )
  .duration(600)
  .EUt(1920)


event.recipes.gtceu.mixer('raw_thorium')
  .itemInputs(
    'gtceu:raw_thorium',
	'6x #tfg:stone_dusts',					//realisticly should be monazite
	'minecraft:clay'
  )
  .inputFluids(
    Fluid.of("minecraft:water", 1000)
  )
  .itemOutputs(
    '2x gtceu:raw_thorium'
  )
  .duration(200)
  .EUt(480)  



})