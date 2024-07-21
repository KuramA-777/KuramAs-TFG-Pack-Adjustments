// priority: 0

ServerEvents.recipes(event => {
    
    // remove item
    event.remove({ output: 'toms_storage:ts.storage_terminal' })
    event.remove({ output: 'toms_storage:ts.crafting_terminal' })
    event.remove({ output: 'toms_storage:ts.inventory_cable_connector' })
    event.remove({ output: 'toms_storage:ts.inventory_connector' })
    event.remove({ output: 'toms_storage:ts.wireless_terminal' })
    event.remove({ output: 'toms_storage:ts.adv_wireless_terminal' })

    event.remove({ output: 'functionalstorage:storage_controller' })
    event.remove({ output: 'functionalstorage:controller_extension' })
    event.remove({ output: 'functionalstorage:compacting_drawer' })
    event.remove({ output: 'functionalstorage:simple_compacting_drawer' })

    event.remove({ output: 'waystones:warp_stone' })
    event.remove({ output: 'waystones:waystone' })

    event.remove({ output: 'createdeco:andesite_window' })
    event.remove({ output: 'createdeco:dusk_bricks' })
    event.remove({ output: 'createdeco:iron_sheet_metal' })
    event.remove({ output: 'createdeco:iron_catwalk' })
    event.remove({ output: 'createdeco:iron_catwalk_railing' })
    event.remove({ output: 'createdeco:iron_support_wedge' })

    event.remove({ output: 'tesseract:tesseract' })

    //event.remove({ id: 'tfg:macerator/charcoal' })
    //event.remove({ id: 'jei:/tfg/milling/charcoal' })





    // add shaped recipe //
    //////////////////////

    //-- Toms Storage Stuff
    event.shaped('toms_storage:ts.storage_terminal', [
        'BAB',
        'CDE',
        'BAB' 
    ], {
        A: 'gtceu:bronze_plate',
        B: '#minecraft:planks',
        C: '#forge:chests/wooden',
        D: 'gtceu:bronze_gear',
        E: '#forge:glass'
    }).id('toms_storage:crafting/storage_terminal')

    event.shaped('toms_storage:ts.crafting_terminal', [
        'BDB',
        'DAD',
        'BDB' 
    ], {
        A: 'toms_storage:ts.storage_terminal',
        B: '#tfc:workbenches',
        D: 'gtceu:bronze_gear'
    }).id('toms_storage:crafting/crafting_terminal')

    event.shaped('toms_storage:ts.inventory_cable_connector', [
        'ACE',
        'BDF',
        'ACE' 
    ], {
        A: 'minecraft:air',
        B: 'toms_storage:ts.inventory_cable',
        C: 'gtceu:bronze_plate',
        D: '#forge:chests/wooden',
        E: '#minecraft:planks',
        F: 'gtceu:bronze_gear'
    }).id('toms_storage:crafting/inventory_cable_connector')

    event.shaped('toms_storage:ts.inventory_connector', [
        'BAB',
        'ADA',
        'BAB' 
    ], {
        A: 'toms_storage:ts.inventory_cable',
        B: '#minecraft:planks',
        D: 'gtceu:bronze_gear',
    }).id('toms_storage:crafting/inventory_connector')

    //-- Functional Storage Stuff

    event.shaped('functionalstorage:storage_controller', [
        'BAB',
        'CDC',
        'BAB' 
    ], {
        A: 'gtceu:wrought_iron_plate',
        B: '#forge:stone',
        C: '#functionalstorage:drawer',
        D: 'gtceu:bronze_gear',
    }).id('functionalstorage:crafting/storage_controller')

    event.shaped('functionalstorage:controller_extension', [
        'BAB',
        'CDC',
        'BAB' 
    ], {
        A: 'gtceu:wrought_iron_plate',
        B: '#forge:stone',
        C: '#functionalstorage:drawer',
        D: 'gtceu:small_bronze_gear',
    }).id('functionalstorage:crafting/controller_extension')

    event.shaped('functionalstorage:compacting_drawer', [
        'BBB',
        'DCD',
        'BAB' 
    ], {
        A: 'gtceu:wrought_iron_plate',
        B: '#forge:stone',
        C: '#functionalstorage:drawer',
        D: 'minecraft:piston',
    }).id('functionalstorage:crafting/compacting_drawer')

    event.shaped('functionalstorage:simple_compacting_drawer', [
        'BBB',
        'BCD',
        'BAB' 
    ], {
        A: 'gtceu:wrought_iron_plate',
        B: '#forge:stone',
        C: '#functionalstorage:drawer',
        D: 'minecraft:piston',
    }).id('functionalstorage:crafting/simple_compacting_drawer')

    //-- Waystone Stuff

    event.shaped('waystones:warp_stone', [
        'BAB',
        'ACA',
        'BAB' 
    ], {
        A: '#forge:gems',
        B: '#forge:dyes/purple',
        C: 'gtceu:glass_tube',
    }).id('waystones:crafting/warp_stone')

    event.shaped('waystones:waystone', [
        'DAD',
        'ACA',
        'BBB' 
    ], {
        A: '#tfc:rock/raw',
        B: '#forge:stone_bricks',
        C: 'waystones:warp_stone',
        D: 'minecraft:air'
    }).id('waystones:crafting/waystone')


    //-- Deco Block Stuff

    event.shaped('2x create:andesite_alloy', [
        'CB',
        'BC'
    ], {
        B: '#forge:nuggets/zinc',
        C: 'minecraft:andesite',
    }).id('create:crafting/andesite_alloy')

    event.shaped('1x chisel:chisel', [
        'CB',
        'AC'
    ], {
        A: '#forge:rods/wood',
        B: 'gtceu:wrought_iron_ingot',
        C: 'minecraft:air',
    }).id('chisel:crafting/chisel')

    event.shaped('32x factory_blocks:factory', [
        'BAB',
        'ACA',
        'BAB' 
    ], {
        A: '#forge:stone',
        B: 'gtceu:wrought_iron_ingot',
        C: 'minecraft:air',
    }).id('factory_blocks:crafting/factory_block')

    event.shaped('8x xtonesreworked:xtone_tile', [
        'BBC',
        'BAB',
        'CBB' 
    ], {
        A: '#forge:stone',
        B: '#minecraft:slabs',
        C: 'minecraft:air',
    }).id('xtonesreworked:crafting/xtone_tile')

    event.shaped('2x xtonesreworked:flat_lamp', [
        'ADA',
        'BBB',
        'CCC' 
    ], {
        A: 'gtceu:wrought_iron_ingot',
        B: '#minecraft:slabs',
        C: 'minecraft:air',
        D: 'tfc:torch'
    }).id('xtonesreworkeds:crafting/flat_lamp')

    event.shaped('8x xtonesreworked:korp_block_0', [
        'AAA',
        'ABA',
        'AAA' 
    ], {
        A: 'xtonesreworked:xtone_tile',
        B: '#forge:gravel',
    }).id('xtonesreworked:crafting/korp_block_0')

    event.shaped('8x xtonesreworked:bitt_block_0', [
        'AAA',
        'ABA',
        'AAA' 
    ], {
        A: 'xtonesreworked:xtone_tile',
        B: '#minecraft:coals',
    }).id('xtonesreworked:crafting/bitt_block_0')

    event.shaped('2x createdeco:andesite_window', [
        'ACA',
        'CBC',
        'AAA' 
    ], {
        A: 'minecraft:air',
        B: 'minecraft:glass',
        C: 'create:andesite_alloy'
    }).id('createdeco:crafting/andesite_window')

    event.shaped('4x createdeco:dusk_bricks', [
        'BBB',
        'BAB',
        'BBB' 
    ], {
        A: '#minecraft:coals',
        B: 'minecraft:brick',
    }).id('createdeco:crafting/dusk_bricks')

    event.shaped('4x createdeco:dean_bricks', [
        'BBB',
        'BAB',
        'BBB' 
    ], {
        A: 'tfc:thatch',
        B: 'minecraft:brick',
    }).id('createdeco:crafting/dean_bricks')

    event.shaped('4x createdeco:blue_bricks', [
        'BBB',
        'BAB',
        'BBB' 
    ], {
        A: 'minecraft:clay_ball',
        B: 'minecraft:brick',
    }).id('createdeco:crafting/blue_bricks')

    event.shaped('4x createdeco:umber_bricks', [
        'BBB',
        'BAB',
        'BBB' 
    ], {
        A: '#minecraft:dirt',
        B: 'minecraft:brick',
    }).id('createdeco:crafting/umber_bricks')

    event.shaped('4x createdeco:pearl_bricks', [
        'BBB',
        'BAB',
        'BBB' 
    ], {
        A: 'tfc:rock/cobble/marble',
        B: 'minecraft:brick',
    }).id('createdeco:crafting/pearl_bricks')

    event.shaped('4x createdeco:iron_sheet_metal', [
        'AA',
        'AA' 
    ], {
        A: '#forge:plates/iron',
    }).id('createdeco:crafting/iron_sheet_metal')

    event.shaped('4x createdeco:iron_catwalk', [
        'CBC',
        'BAB',
        'CBC' 
    ], {
        A: 'minecraft:iron_bars',
        B: '#forge:plates/iron',
        C: 'minecraft:air'
    }).id('createdeco:crafting/iron_catwalk')

    event.shaped('8x createdeco:iron_catwalk_railing', [
        'BBB',
        'ACA',
        'ACA' 
    ], {
        A: 'minecraft:iron_bars',
        B: '#forge:plates/iron',
        C: 'minecraft:air'
    }).id('createdeco:crafting/iron_catwalk_railing')

    event.shaped('3x createdeco:iron_support_wedge', [
        'CB',
        'BB' 
    ], {
        B: '#forge:plates/iron',
        C: 'minecraft:air'
    }).id('createdeco:crafting/iron_support_wedge')

    event.shaped('3x minecraft:iron_bars', [
        'AAA',
        'AAA',
        'CCC' 
    ], {
        A: '#forge:rods/iron',
        C: 'minecraft:air'
    }).id('minecraft:crafting/iron_bars')


    //-- GT&TFC Recipe Fixes
    
    event.shaped('1x gtceu:treated_wood_plate', [
        'AA',
        'BB' 
    ], {
        A: 'gtceu:treated_wood_slab',
        B: 'minecraft:air'
    }).id('gtceu:crafting/simple_treated_wood_plate')

    event.shaped('1x create:mechanical_press', [
        'DAD',
        'DBD',
        'DCD' 
    ], {
        A: 'create:shaft',
        B: 'create:andesite_casing',
        C: 'tfc:metal/anvil/wrought_iron',
        D: 'minecraft:air'
    }).id('create:crafting/tfc_anvil_mechanical_press')


    // add shapeless recipes //
    //////////////////////////

    event.shapeless('craftingstation:crafting_station', [
        '#tfc:workbenches'
    ]).id('craftingstation:tfcbench_to_station')


    // Create Recipes for TFC&GT Compat

        // Pressing
        event.recipes.createPressing('gtceu:wrought_iron_ingot', 'tfc:refined_iron_bloom');
        event.recipes.createPressing('tfc:refined_iron_bloom', 'tfc:raw_iron_bloom');

        event.recipes.createPressing('gtceu:steel_ingot', 'tfc:metal/ingot/high_carbon_steel');
        event.recipes.createPressing('tfc:metal/ingot/high_carbon_steel', 'tfc:metal/ingot/pig_iron');

        //event.recipes.createPressing('gtceu:rubber_plate', 'gtceu:rubber_ingot');


    // Assembly Line //
    //////////////////

        // ALCR
    event.recipes.gtceu.assembly_line('advanced_large_chemical_reactor')
        .itemInputs('gtceu:large_chemical_reactor', '3x #gtceu:circuits/iv', '6x gtceu:tungsten_steel_plate', '6x gtceu:tungsten_carbide_plate', '4x gtceu:platinum_single_cable')
        .itemOutputs('gtceu:advanced_large_chemical_reactor')
        .inputFluids(
            Fluid.of('gtceu:copper', 4608),
            Fluid.of('gtceu:tin', 4608),
            Fluid.of('gtceu:soldering_alloy', 2304),
            Fluid.of('gtceu:lubricant', 8000)
        )
        .duration(500)
        .EUt(8000)

        // Tesseract
    event.recipes.gtceu.assembly_line('tesseract')
        .itemInputs('6x gtceu:double_naquadah_plate', '6x gtceu:quantum_eye', 'ae2:singularity')
        .itemOutputs('tesseract:tesseract')
        .inputFluids(Fluid.of('gtceu:incoloy_ma_956', 3744))
        .duration(500)
        .EUt(32000)    


    // Assembler //
    //////////////    
    event.recipes.gtceu.assembler('minecraft_bucket')
        .itemInputs('gtceu:blue_steel_plate', 'gtceu:red_steel_plate')
        .itemOutputs('minecraft:bucket')
        .circuit(7)
        .duration(100)
        .EUt(32)


    // Compressing //
    ////////////////
    event.recipes.gtceu.compressor('minecraft_stone')
        .itemInputs('3x #tfg:stone_dusts')
        .itemOutputs('minecraft:stone')
        .duration(120)
        .EUt(32)

    event.recipes.gtceu.compressor('minecraft_andesite')
        .itemInputs('minecraft:stone')
        .itemOutputs('minecraft:andesite')
        .duration(120)
        .EUt(32)

    event.recipes.gtceu.compressor('createdeco_industrial_iron_ingot')
        .itemInputs('#forge:ingots/wrought_iron')
        .itemOutputs('createdeco:industrial_iron_ingot')
        .duration(120)
        .EUt(32)


    // Bending //
    ////////////////
    event.recipes.gtceu.bender('createdeco_andesite_sheet')
        .itemInputs('create:andesite_alloy')
        .itemOutputs('createdeco:andesite_sheet')
        .circuit(1)
        .duration(120)
        .EUt(32)

    event.recipes.gtceu.bender('createdeco_industrial_iron_sheet')
        .itemInputs('createdeco:industrial_iron_ingot')
        .itemOutputs('createdeco:industrial_iron_sheet')
        .circuit(1)
        .duration(120)
        .EUt(32)


    // Alloy Smelter //
    //////////////////
    event.recipes.gtceu.alloy_smelter('minecraft_smooth_stone')
        .itemInputs('minecraft:stone')
        .itemInputs('2x #tfg:stone_dusts')
        .itemOutputs('2x minecraft:smooth_stone')
        .duration(120)
        .EUt(8)


    // Chemical Reactor //
    /////////////////////

    event.recipes.gtceu.chemical_reactor('minecraft_glowstone_dust')
        .itemInputs('2x minecraft:redstone')
        .itemInputs('gtceu:phosphorus_dust')
        .itemInputs('gtceu:zinc_dust')
        .itemOutputs('4x minecraft:glowstone_dust')
        .inputFluids(Fluid.of('gtceu:hydrogen_sulfide', 200))
        .circuit(7)
        .duration(200)
        .EUt(120)




    // TFC Leather Line //
    /////////////////////

        event.recipes.gtceu.chemical_reactor('tfc_prep_large_hide_to_leather')
        .itemInputs('tfc:large_prepared_hide')
        .itemOutputs('3x minecraft:leather')
        .inputFluids(Fluid.of('tfc:tannin', 500))
        .duration(800)
        .EUt(8)

        event.recipes.gtceu.chemical_reactor('tfc_prep_medium_hide_to_leather')
        .itemInputs('tfc:medium_prepared_hide')
        .itemOutputs('2x minecraft:leather')
        .inputFluids(Fluid.of('tfc:tannin', 500))
        .duration(800)
        .EUt(8)

        event.recipes.gtceu.chemical_reactor('tfc_prep_small_hide_to_leather')
        .itemInputs('tfc:small_prepared_hide')
        .itemOutputs('1x minecraft:leather')
        .inputFluids(Fluid.of('tfc:tannin', 500))
        .duration(800)
        .EUt(8)

        event.recipes.gtceu.chemical_reactor('tfc_tannin')
        .itemInputs('4x #tfc:makes_tannin')
        .inputFluids(Fluid.of('minecraft:water', 4000))
        .outputFluids(Fluid.of('tfc:tannin', 4000))
        .duration(800)
        .EUt(8)

        event.recipes.gtceu.chemical_reactor('tfc_scraped_large_hide_to_prepared')
        .itemInputs('tfc:large_scraped_hide')
        .itemOutputs('tfc:large_prepared_hide')
        .inputFluids(Fluid.of('minecraft:water', 500))
        .duration(800)
        .EUt(8)

        event.recipes.gtceu.chemical_reactor('tfc_scraped_medium_hide_to_prepared')
        .itemInputs('tfc:medium_scraped_hide')
        .itemOutputs('tfc:medium_prepared_hide')
        .inputFluids(Fluid.of('minecraft:water', 500))
        .duration(800)
        .EUt(8)

        event.recipes.gtceu.chemical_reactor('tfc_scraped_small_hide_to_prepared')
        .itemInputs('tfc:small_scraped_hide')
        .itemOutputs('tfc:small_prepared_hide')
        .inputFluids(Fluid.of('minecraft:water', 500))
        .duration(800)
        .EUt(8)

        event.recipes.gtceu.assembler('tfc_soaked_large_hide_to_scraped')
        .itemInputs('tfc:large_soaked_hide')
        .itemOutputs('tfc:large_scraped_hide')
        .duration(200)
        .EUt(8)

        event.recipes.gtceu.assembler('tfc_soaked_medium_hide_to_scraped')
        .itemInputs('tfc:medium_soaked_hide')
        .itemOutputs('tfc:medium_scraped_hide')
        .duration(200)
        .EUt(8)

        event.recipes.gtceu.assembler('tfc_soaked_small_hide_to_scraped')
        .itemInputs('tfc:small_soaked_hide')
        .itemOutputs('tfc:small_scraped_hide')
        .duration(200)
        .EUt(8)

        event.recipes.gtceu.chemical_reactor('tfc_raw_large_hide_to_soaked')
        .itemInputs('tfc:large_raw_hide')
        .itemOutputs('tfc:large_soaked_hide')
        .inputFluids(Fluid.of('tfc:limewater', 500))
        .duration(800)
        .EUt(8)

        event.recipes.gtceu.chemical_reactor('tfc_raw_medium_hide_to_soaked')
        .itemInputs('tfc:medium_raw_hide')
        .itemOutputs('tfc:medium_soaked_hide')
        .inputFluids(Fluid.of('tfc:limewater', 500))
        .duration(800)
        .EUt(8)

        event.recipes.gtceu.chemical_reactor('tfc_raw_small_hide_to_soaked')
        .itemInputs('tfc:small_raw_hide')
        .itemOutputs('tfc:small_soaked_hide')
        .inputFluids(Fluid.of('tfc:limewater', 500))
        .duration(800)
        .EUt(8)

        event.recipes.gtceu.mixer('tfc_limewater')
        .itemInputs('tfc:powder/flux')
        .inputFluids(Fluid.of('minecraft:water', 500))
        .outputFluids(Fluid.of('tfc:limewater', 500))
        .duration(40)
        .EUt(8)

        event.recipes.gtceu.assembler('tfc_sheep_large_hide_to_raw')
        .itemInputs('tfc:large_sheepskin_hide')
        .itemOutputs('tfc:large_raw_hide')
        .itemOutputs('3x tfc:wool')
        .duration(200)
        .EUt(8)

        event.recipes.gtceu.assembler('tfc_sheep_medium_hide_to_raw')
        .itemInputs('tfc:medium_sheepskin_hide')
        .itemOutputs('tfc:medium_raw_hide')
        .itemOutputs('2x tfc:wool')
        .duration(200)
        .EUt(8)

        event.recipes.gtceu.assembler('tfc_sheep_small_hide_to_raw')
        .itemInputs('tfc:small_sheepskin_hide')
        .itemOutputs('tfc:small_raw_hide')
        .itemOutputs('1x tfc:wool')
        .duration(200)
        .EUt(8)

        // Extra TFC Barrel Recipes to GT

        event.recipes.gtceu.chemical_reactor('tfc_glue')
        .itemInputs('gtceu:calcium_dust')
        .itemOutputs('tfc:glue')
        .inputFluids(Fluid.of('tfc:limewater', 500))
        .duration(800)
        .EUt(8)


    // Fix Charcoal Dust/Powder

        event.recipes.gtceu.macerator('tfc_charcoal_powder')
        .itemInputs('gtceu:charcoal_dust')
        .itemOutputs('2x tfc:powder/charcoal')
        .duration(20)
        .EUt(2)

        event.shaped('1x gtceu:charcoal_dust', [
        'AA'
    ], {
        A: 'tfc:powder/charcoal',
    }).id('gtceu:crafting/charcoal_dust')

})      